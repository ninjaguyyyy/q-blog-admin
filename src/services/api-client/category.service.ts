import { Category } from 'models/entity';
import axiosClient from 'services/api-client/axios-client';

const APIs = {
  CATEGORIES: '/api/categories'
};

export const fetchCategories = async (): Promise<Category[]> => {
  const data = await axiosClient.get(APIs.CATEGORIES);
  return data.data;
};

export const createCategory = async (payload: CreateOrUpdateCategoryPayload) => {
  const data = await axiosClient.post(APIs.CATEGORIES, payload);
  return data;
};

export const updateCategory = async (payload: CreateOrUpdateCategoryPayload) => {
  const data = await axiosClient.patch(APIs.CATEGORIES, payload);
  return data;
};

export const deleteCategory = async () => {
  const data = await axiosClient.delete(APIs.CATEGORIES); // todo: change this
  return data;
};

type CreateOrUpdateCategoryPayload = {
  name: string;
  parentCategoryId: string;
};
