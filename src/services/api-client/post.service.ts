import { Post } from 'models/entity';
import axiosClient from 'services/api-client/axios-client';

const APIs = {
  POSTS: '/api/posts'
};

export const fetchPosts = async (): Promise<any> => {
  const data: Post[] = await axiosClient.get(APIs.POSTS);
  return data;
};

export const createPost = async (payload: CreateOrUpdatePostPayload) => {
  const data = await axiosClient.post(APIs.POSTS, payload);
  return data;
};

export const updatePost = async (id: string, payload: CreateOrUpdatePostPayload) => {
  const data = await axiosClient.patch(`${APIs.POSTS}/${id}`, payload);
  return data;
};

export const deletePost = async (id: string) => {
  const data = await axiosClient.delete(`${APIs.POSTS}/${id}`);
  return data;
};

export type CreateOrUpdatePostPayload = {
  name: string;
  parentCategoryId?: string;
};
