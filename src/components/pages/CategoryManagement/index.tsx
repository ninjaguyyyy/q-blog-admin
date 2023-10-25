import { Button, notification } from 'antd';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import CategoryTable from 'components/organisms/CategoryTable';
import CreateOrUpdateCategoryModal from 'components/organisms/CreateOrUpdateCategoryModal';
import { fetchCategories } from 'services/api-client/category.service';
import { getMessageFromError } from 'utils/error';

export default function CategoryManagement() {
  // Queries
  const {
    isLoading,
    error,
    data: categories
  } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories
  });

  // State
  const [isOpenCreateOrUpdateCategoryModal, setIsOpenCreateOrUpdateCategoryModal] =
    useState<boolean>(false);

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

  const handleClickNewCategory = () => {
    setIsOpenCreateOrUpdateCategoryModal(true);
  };

  const createCategory = () => {
    console.log('create');
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

        <CategoryTable dataSource={categories} isLoading={isLoading} />
      </div>

      {isOpenCreateOrUpdateCategoryModal && categories && (
        <CreateOrUpdateCategoryModal
          categories={categories}
          onOk={createCategory}
          onCancel={() => setIsOpenCreateOrUpdateCategoryModal(false)}
        />
      )}

      {notiContextHolder}
    </div>
  );
}
