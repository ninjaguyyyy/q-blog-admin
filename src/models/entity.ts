export type User = {
  name: string;
};

export type Category = {
  name: string;
  _id: string;
  parentCategory?: Category[];
};

export type Post = {
  _id: string;
  title: string;
  isPublished: boolean;
  publishedDate: Date;
  content: string;
  image: string;
  slug: string;
  categories: Category[];
};
