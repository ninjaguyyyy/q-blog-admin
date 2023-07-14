// eslint-disable-next-line import/named
import { Select, SelectProps } from 'antd';
import { Control, Controller } from 'react-hook-form';

interface Props extends SelectProps<any> {
  name: string;
  control: Control<any>;
  defaultValue?: unknown;
}

export default function SelectField(props: Props) {
  const { name, control, defaultValue, ...selectProps } = props;
  const defaultValueInput = defaultValue !== undefined ? defaultValue : '';

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValueInput}
      render={({ field }) => <Select {...selectProps} {...field} />}
    />
  );
}
