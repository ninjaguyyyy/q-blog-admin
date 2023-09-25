// eslint-disable-next-line import/named
import { Input, InputProps } from 'antd';
import { Control, Controller } from 'react-hook-form';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

type Props = InputProps & {
  name: string;
  className?: string;
  control: Control<any>;
  defaultValue?: unknown;
};

export default function PasswordField(props: Props) {
  const { name, control, defaultValue, ...textFieldProps } = props;
  const defaultValueInput = defaultValue !== undefined ? defaultValue : '';

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValueInput}
      render={({ field }) => {
        return (
          <Input.Password
            placeholder="input password"
            {...textFieldProps}
            {...field}
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
        );
      }}
    />
  );
}
