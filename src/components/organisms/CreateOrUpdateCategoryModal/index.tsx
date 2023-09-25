import { Button, Form, Input, Modal, Select } from 'antd';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import InputField from 'components/atoms/InputField';
import { Category } from 'models/entity';
import SelectField from 'components/atoms/SelectField';
import { createCategory, updateCategory } from 'services/api-client/category.service';

type Props = {
  category?: Category;
  onOk: () => void;
  onCancel: () => void;
};

type FormData = {
  name: string;
  parentCategoryId: string;
};

export default function CreateOrUpdateCategoryModal({ category, onOk, onCancel }: Props) {
  const isEditMode = !!category;

  // State
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Form
  const { control, handleSubmit } = useForm<FormData>({});

  const onSubmit = async (data: FormData) => {
    console.log(data);
    try {
      setIsSubmitting(true);
      isEditMode ? await updateCategory(data) : await createCategory(data);
    } catch (error) {
      console.log('🚀 ~ file: index.tsx:36 ~ requestCreateCategory ~ error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <Button loading={isSubmitting} key="submit" type="primary" form="form" htmlType="submit">
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
            name="parentCategoryId"
            control={control}
            size="middle"
            defaultValue={0}
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 0, label: 'None' }
            ]}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}
