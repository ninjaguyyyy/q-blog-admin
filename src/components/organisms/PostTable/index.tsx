import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import { Post } from 'models/entity';

type Props = {
  dataSource?: Post[];
  isLoading: boolean;
  onClickEdit: (postId: string) => void;
  onClickDelete: (postId: string) => void;
};

const PostTable = ({ dataSource, isLoading, onClickEdit, onClickDelete }: Props) => {
  // Functions

  // Variables
  const columns: ColumnsType<Post> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => {
        const postId = record._id;

        return (
          <Space size="middle">
            <div
              className="text-yellow-color cursor-pointer text-base"
              onClick={() => onClickEdit(postId)}>
              <EditOutlined />
            </div>
            <div
              className="text-red-color cursor-pointer text-base"
              onClick={() => onClickDelete(postId)}>
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

export default PostTable;
