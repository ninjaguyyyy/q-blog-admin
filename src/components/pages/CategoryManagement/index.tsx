import { Button } from 'antd';
import { useState } from 'react';

import CategoryTable from 'components/organisms/CategoryTable';
import CreateOrUpdateCategoryModal from 'components/organisms/CreateOrUpdateCategoryModal';

export default function CategoryManagement() {
  // State
  const [isOpenCreateOrUpdateCategoryModal, setIsOpenCreateOrUpdateCategoryModal] =
    useState<boolean>(false);

  // Function
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

        <CategoryTable />
      </div>

      {isOpenCreateOrUpdateCategoryModal && (
        <CreateOrUpdateCategoryModal
          onOk={createCategory}
          onCancel={() => setIsOpenCreateOrUpdateCategoryModal(false)}
        />
      )}
    </div>
  );
}
