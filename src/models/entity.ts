export type User = {
  name: string;
};

export type Category = {
  name: string;
  _id: string;
  parentCategory?: Category[];
};
