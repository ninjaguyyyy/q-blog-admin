import axios from 'axios';
import queryString from 'query-string';

import { serverConfig } from 'config/index';

console.log(serverConfig.api_url);

const axiosClient = axios.create({
  baseURL: serverConfig.api_url,
  headers: { 'content-type': 'application/json' },
  paramsSerializer: function (params) {
    return queryString.stringify(params);
  }
});

axiosClient.interceptors.request.use(function (config) {
  // const token = getAccessToken();

  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
