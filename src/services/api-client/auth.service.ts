import axiosClient from 'services/api-client/axios-client';

const APIs = {
  LOGIN: '/api/auth/login'
};

export const login = async (payload: LoginPayload) => {
  const data = await axiosClient.post<never, LoginRes>(APIs.LOGIN, payload);
  return data;
};

type LoginPayload = {
  username: string;
  password: string;
};

type LoginRes = {
  access_token: string;
};
