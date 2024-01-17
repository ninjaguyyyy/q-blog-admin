import { Button, notification } from 'antd';
import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import CategoryTable from 'components/organisms/CategoryTable';
import CreateOrUpdateCategoryModal from 'components/organisms/CreateOrUpdateCategoryModal';
import { deleteCategory, fetchCategories } from 'services/api-client/category.service';
import { getMessageFromError } from 'utils/error';
import { Category } from 'models/entity';
import ConfirmationModal from 'components/molecules/ConfirmationModal';

export default function CategoryManagement() {
  // Queries
  const queryClient = useQueryClient();

  const {
    isLoading,
    error,
    data: categories,
    refetch
  } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    refetchOnMount: true,
    refetchOnWindowFocus: true
  });
  console.log('🚀 ~ CategoryManagement ~ categories:', categories);

  // Mutation
  const deleteCategoryMutation = useMutation((categoryId: string) => {
    return deleteCategory(categoryId);
  });

  // State
  const [isOpenCreateOrUpdateCategoryModal, setIsOpenCreateOrUpdateCategoryModal] =
    useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const [isShowConfirmationModal, setIsShowConfirmationModal] = useState<boolean>(false);

  // Effects
  useEffect(() => {
    if (error) {
      openErrorNotification(getMessageFromError(error));
    }
  }, [error]);

  // Notification
  const [api, notiContextHolder] = notification.useNotification();

  // Functions
  const openErrorNotification = (errMsg: string) => {
    api.info({
      message: `Error`,
      description: errMsg,
      type: 'error'
    });
  };

  const openSuccessNotification = (msg: string) => {
    api.info({
      message: `Success`,
      description: msg,
      type: 'success'
    });
  };

  const handleClickNewCategory = () => {
    setIsOpenCreateOrUpdateCategoryModal(true);
  };

  const handleClickEditCategory = (categoryId: string) => {
    const category = categories?.find((category) => category._id === categoryId);
    setSelectedCategory(category);
    setIsOpenCreateOrUpdateCategoryModal(true);
  };

  const hideCreateOrUpdateCategoryModal = () => {
    setIsOpenCreateOrUpdateCategoryModal(false);
    setSelectedCategory(undefined);
  };

  const handleSaveCategorySuccess = () => {
    openSuccessNotification('Save a category successfully!');
    hideCreateOrUpdateCategoryModal();
    refetch();
    queryClient.invalidateQueries(['categories']);
  };

  const handleConfirmDeleteCategory = async () => {
    try {
      await deleteCategoryMutation.mutateAsync(selectedCategory?._id as string);
      openSuccessNotification('Delete successfully!');
      setIsShowConfirmationModal(false);
    } catch (error: unknown) {
      openErrorNotification(getMessageFromError(error));
    } finally {
      setSelectedCategory(undefined);
    }
  };

  const handleCloseConfirmation = () => {
    setIsShowConfirmationModal(false);
    setSelectedCategory(undefined);
  };

  const handleClickDeleteCategory = async (categoryId: string) => {
    const category = categories?.find((category) => category._id === categoryId);
    setSelectedCategory(category);
    setIsShowConfirmationModal(true);
  };

  // Render
  return (
    <div className="page-management-container">
      <div className="heading px-6 py-6 font-medium text-lg">Category</div>

      <div className="section px-6 py-6">
        <div className="mb-4 flex justify-end">
          <Button type="primary" size="large" onClick={handleClickNewCategory}>
            New Category
          </Button>
        </div>

        <CategoryTable
          dataSource={categories}
          isLoading={isLoading}
          onClickEdit={handleClickEditCategory}
          onClickDelete={handleClickDeleteCategory}
        />
      </div>

      {isOpenCreateOrUpdateCategoryModal && categories && (
        <CreateOrUpdateCategoryModal
          categories={categories}
          category={selectedCategory}
          onOk={handleSaveCategorySuccess}
          onCancel={hideCreateOrUpdateCategoryModal}
          onFailed={openErrorNotification}
        />
      )}

      {isShowConfirmationModal && (
        <ConfirmationModal
          onOk={handleConfirmDeleteCategory}
          onCancel={handleCloseConfirmation}
          isSubmitting={deleteCategoryMutation.isLoading}
        />
      )}

      {notiContextHolder}
    </div>
  );
}
