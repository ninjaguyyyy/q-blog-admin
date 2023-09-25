import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Button, notification } from 'antd';
import { useNavigate } from 'react-router-dom';

import { loginSchema } from 'libs/validation/login-schema';
import InputField from 'components/atoms/InputField';
import InputError from 'components/atoms/InputError';
import PasswordField from 'components/atoms/PasswordField';
import { login } from 'services/api-client/auth.service';
import { setToken } from 'utils/storage';
import { ROUTE } from 'constants/routes';
import { ERR_MSG } from 'constants/message';

type FormData = {
  username: string;
  password: string;
};

export default function Login() {
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema)
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await login(data);
      setToken(res['access_token']);
      navigate(ROUTE.DASHBOARD);
    } catch (err) {
      api.error({
        message: `Login Failed`,
        description: ERR_MSG.INVALID_CREDENTIAL
      });
    }
  };

  return (
    <section className="admin h-screen flex relative bg-[#eef2f6]">
      <div className="flex flex-col justify-center items-center mx-auto">
        <div className="w-[450px] px-[24px] pt-[48px] pb-[36px] bg-white rounded-xl">
          <div className="flex justify-center">
            <p className="text-2xl font-semibold text-[#673ab7]">Hi, Welcome Back</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-[12px]">
              <h2 className="mb-[32px] flex justify-center h-[38px] items-center text-base leading-[20px] text-center text-[#697586]">
                Enter your credentials to continue
              </h2>

              {/*Username*/}
              <div className="relative">
                <InputField
                  name="username"
                  control={control}
                  placeholder="Username"
                  className="w-full"
                />
                {errors.username && (
                  <InputError message={errors.username.message} className="mt-1" />
                )}
              </div>

              {/*Password*/}
              <div className="relative">
                <PasswordField
                  name="password"
                  placeholder="*********"
                  control={control}
                  className="w-full"
                />
                {errors.password && (
                  <InputError message={errors.password.message} className="mt-1" />
                )}
              </div>

              {/*Submit*/}
              <div className="flex justify-center mt-4">
                <Button
                  htmlType="submit"
                  className="flex w-full bg-[#673ab7] text-white justify-center hover:!text-white hover:!border-none">
                  Sign In
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {contextHolder}
    </section>
  );
}
