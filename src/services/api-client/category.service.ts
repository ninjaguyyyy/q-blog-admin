import axiosClient from 'services/api-client/axios-client';

const APIs = {
  CATEGORIES: '/api/categories'
};

export const fetchCategories = async () => {
  const data = await axiosClient.get(APIs.CATEGORIES);
  return data;
};
