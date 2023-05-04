import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from 'components/schemaLogin';
const textInputClassName =
  'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';

const Form = () => {
  const formSubmitHandler = (data) => {
    console.log(data);
  };
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(loginSchema)
  });
  return (
    <div className="md:w-[500px] shadow-sm shadow-white bg-white w-[320px] mx-auto px-7 py-4 rounded-xl">
      <form className="w-full" onSubmit={handleSubmit(formSubmitHandler)}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your email
          </label>
          <input
            {...register('email')}
            name="email"
            type="email"
            id="email"
            className={textInputClassName}
            placeholder="test@test.com"
          />
          {errors.email ? <span className="text-red-900">{errors.email.message}</span> : <></>}
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your password
          </label>
          <input
            {...register('password')}
            name="password"
            type="password"
            id="password"
            className={textInputClassName}
          />
          {errors.password ? (
            <span className="text-red-900">{errors.password.message}</span>
          ) : (
            <></>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Confirm Password
          </label>
          <input
            {...register('confirmPassword')}
            type="password"
            id="confirmPassword"
            className={textInputClassName}
          />
          {errors.confirmPassword ? (
            <span className="text-red-900">{errors.confirmPassword.message}</span>
          ) : (
            <></>
          )}
        </div>
        <div className="flex justify-between mb-6">
          <div className="flex">
            <div className="flex items-center h-5">
              <input
                {...register('remember')}
                name="remember"
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Remember me
            </label>
            {errors.remember ? (
              <span className="text-red-900">{errors.remember.message}</span>
            ) : (
              <></>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
