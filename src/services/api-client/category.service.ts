import { Category } from 'models/entity';
import axiosClient from 'services/api-client/axios-client';

const APIs = {
  CATEGORIES: '/api/categories'
};

export const fetchCategories = async (): Promise<Category[]> => {
  const data: Category[] = await axiosClient.get(APIs.CATEGORIES);
  return data;
};

export const createCategory = async (payload: CreateOrUpdateCategoryPayload) => {
  const data = await axiosClient.post(APIs.CATEGORIES, payload);
  return data;
};

export const updateCategory = async (id: string, payload: CreateOrUpdateCategoryPayload) => {
  const data = await axiosClient.patch(`${APIs.CATEGORIES}/${id}`, payload);
  return data;
};

export const deleteCategory = async (id: string) => {
  const data = await axiosClient.delete(`${APIs.CATEGORIES}/${id}`);
  return data;
};

export type CreateOrUpdateCategoryPayload = {
  name: string;
  parentCategoryId?: string;
};
