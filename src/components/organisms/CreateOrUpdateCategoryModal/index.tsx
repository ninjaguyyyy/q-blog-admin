import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { Button, Form, Modal } from 'antd';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import InputError from 'components/atoms/InputError';
import InputField from 'components/atoms/InputField';
import SelectField from 'components/atoms/SelectField';
import { categorySchema } from 'libs/validation/category-schema';
import { Category } from 'models/entity';
import {
  CreateOrUpdateCategoryPayload,
  createCategory,
  deleteCategory,
  updateCategory
} from 'services/api-client/category.service';
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

  // Mutation
  const createCategoryMutation = useMutation((payload: CreateOrUpdateCategoryPayload) => {
    return createCategory(payload);
  });

  const updateCategoryMutation = useMutation((payload: CreateOrUpdateCategoryPayload) => {
    return updateCategory(category?._id as string, payload);
  });

  // State
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Form
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(categorySchema),
    defaultValues: isEditMode ? transformToDefaultValues(category) : undefined
  });

  // Functions
  function transformToDefaultValues(category: Category) {
    const parentCategoryId = category.parentCategory?.length
      ? category.parentCategory[0]._id
      : undefined;
    return { name: category.name, parentCategoryId };
  }

  const prepareDataToSubmit = (data: FormData) => {
    return {
      name: data.name,
      parentCategory: data.parentCategoryId || undefined
    };
  };

  const onSubmit = async (data: FormData) => {
    const dataToSubmit = prepareDataToSubmit(data);
    try {
      setIsSubmitting(true);
      isEditMode
        ? await updateCategoryMutation.mutateAsync(dataToSubmit)
        : await createCategoryMutation.mutateAsync(dataToSubmit);
      onOk();
    } catch (error: unknown) {
      onFailed(getMessageFromError(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  const convertToCategoryParentOptions = (categories: Category[]) => {
    return categories
      .filter((item) => (isEditMode ? item._id !== category?._id : true))
      .map((category) => ({ value: category._id, label: category.name }));
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
            options={[...convertToCategoryParentOptions(categories), { value: 0, label: 'None' }]}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}
