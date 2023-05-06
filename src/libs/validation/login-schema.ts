import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('please provide a valid email address')
    .required('email address is required'),
  password: yup
    .string()
    .min(8, 'password should have a minimum length of 8')
    .max(12, 'password should have a maximum length of 12')
    .required('password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')])
    .required('confirm password is required'),
  remember: yup.boolean().oneOf([true], 'Please tick checkbox')
});
