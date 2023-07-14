import { Button, Form, Input, Modal, Select } from 'antd';
import { useForm } from 'react-hook-form';

import InputField from 'components/atoms/InputField';
import { Category } from 'models/entity';
import SelectField from 'components/atoms/SelectField';

type Props = {
  category?: Category;
  onOk: () => void;
  onCancel: () => void;
};

type FormData = {
  name: string;
  parentCategory: string;
};

export default function CreateOrUpdateCategoryModal({ category, onOk, onCancel }: Props) {
  const isEditMode = !!category;

  // Form
  const { control, handleSubmit } = useForm<FormData>({});

  const onSubmit = (data: FormData) => console.log(data);

  // Render
  return (
    <Modal
      open={true}
      title={`${isEditMode ? 'Update' : 'Create'} Category`}
      onOk={onOk}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" form="form" htmlType="submit">
          Submit
        </Button>
      ]}>
      <Form
        id="form"
        layout={'vertical'}
        className="mt-4"
        style={{ maxWidth: 600 }}
        onFinish={handleSubmit(onSubmit)}>
        <Form.Item label="Name">
          <InputField name="name" control={control} />
        </Form.Item>
        <Form.Item label="Parent">
          <SelectField
            name="parentCategory"
            control={control}
            size="middle"
            defaultValue="lucy"
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'Yiminghe', label: 'yiminghe' }
            ]}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}
