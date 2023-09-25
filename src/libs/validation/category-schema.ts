import * as yup from 'yup';

export const categorySchema = yup.object().shape({
  name: yup.string().required('This field is required'),
  parentCategoryId: yup.mixed().nullable()
});