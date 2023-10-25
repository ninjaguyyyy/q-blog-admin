import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import queryString from 'query-string';

import { serverConfig } from 'config/index';
import { getToken } from 'utils/storage';

console.log(serverConfig.api_url);

const axiosClient = axios.create({
  baseURL: serverConfig.api_url,
  headers: { 'content-type': 'application/json' },
  paramsSerializer: function (params) {
    return queryString.stringify(params);
  }
});

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

const onResponse = (response: AxiosResponse): any => {
  if (response && response.data) {
    return response.data;
  }
  return response;
};

const onErrorResponse = (error: AxiosError | Error): Promise<AxiosError> => {
  throw error;
};

const setupInterceptors = (instance: AxiosInstance): AxiosInstance => {
  instance.interceptors.request.use(onRequest, onErrorResponse);
  instance.interceptors.response.use(onResponse, onErrorResponse);

  return instance;
};

setupInterceptors(axiosClient);

export default axiosClient;
