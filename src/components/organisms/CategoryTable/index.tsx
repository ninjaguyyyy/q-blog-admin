import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import { Category } from 'models/entity';

type Props = {
  dataSource?: Category[];
  isLoading: boolean;
  onClickEdit: (categoryId: string) => void;
  onClickDelete: (categoryId: string) => void;
};

const CategoryTable = ({ dataSource, isLoading, onClickEdit, onClickDelete }: Props) => {
  // Functions

  // Variables
  const columns: ColumnsType<Category> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>
    },
    {
      title: 'Parent',
      dataIndex: 'age',
      key: 'parentCategory',
      render: (_, record) => {
        const parentCategories = record.parentCategory;
        const parentCategoryName = parentCategories?.length ? parentCategories[0].name : '';
        return <div>{parentCategoryName}</div>;
      }
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => {
        const categoryId = record._id;

        return (
          <Space size="middle">
            <div
              className="text-yellow-color cursor-pointer text-base"
              onClick={() => onClickEdit(categoryId)}>
              <EditOutlined />
            </div>
            <div
              className="text-red-color cursor-pointer text-base"
              onClick={() => onClickDelete(categoryId)}>
              <DeleteOutlined />
            </div>
          </Space>
        );
      }
    }
  ];

  // Render
  return <Table columns={columns} dataSource={dataSource} loading={isLoading} />;
};

export default CategoryTable;
