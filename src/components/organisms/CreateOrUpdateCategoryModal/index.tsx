import { Button, Form, Input, Modal, Select } from 'antd';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

import InputField from 'components/atoms/InputField';
import { Category } from 'models/entity';
import SelectField from 'components/atoms/SelectField';
import { createCategory, updateCategory } from 'services/api-client/category.service';
import { categorySchema } from 'libs/validation/category-schema';
import InputError from 'components/atoms/InputError';
import { getMessageFromError } from 'utils/error';

type Props = {
  categories: Category[];
  category?: Category;
  onOk: () => void;
  onFailed: (msg: string) => void;
  onCancel: () => void;
};

type FormData = {
  name: string;
  parentCategoryId: string;
};

export default function CreateOrUpdateCategoryModal({
  categories,
  category,
  onOk,
  onCancel,
  onFailed
}: Props) {
  const isEditMode = !!category;

  // State
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Form
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(categorySchema)
  });

  const prepareDataToSubmit = (data: FormData) => {
    console.log('🚀 ~ file: index.tsx:31 ~ prepareDataToSubmit ~ data:', data);
    return {
      name: data.name,
      parentCategoryId: data.parentCategoryId || undefined
    };
  };

  // todo: use mutation
  const onSubmit = async (data: FormData) => {
    const dataToSubmit = prepareDataToSubmit(data);
    console.log(data);
    try {
      setIsSubmitting(true);
      isEditMode ? await updateCategory(data) : await createCategory(dataToSubmit);
      onOk();
    } catch (error: any) {
      onFailed(getMessageFromError(error));
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
        {/* Name */}
        <div className="mb-4">
          <Form.Item label="Name" className="mb-2">
            <InputField name="name" control={control} />
          </Form.Item>
          {errors.name && <InputError message={errors.name.message} />}
        </div>

        {/* Parent Category Id */}
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
