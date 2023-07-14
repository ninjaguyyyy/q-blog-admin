import React, { useEffect } from 'react';
import { Space, Table, Tag, notification } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useQuery } from '@tanstack/react-query';

import { fetchCategories } from 'services/api-client/category.service';
import { getMessageFromError } from 'utils/error';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    )
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    )
  }
];

// const data: DataType[] = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer']
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser']
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//     tags: ['cool', 'teacher']
//   }
// ];

const CategoryTable: React.FC = () => {
  // Queries
  const { isLoading, error, data } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories
  });
  console.log('🚀 ~ file: index.tsx:93 ~ error:', error);

  // Notification
  const [api, contextHolder] = notification.useNotification();

  // Functions
  const openErrorNotification = (errMsg: string) => {
    api.info({
      message: `Error`,
      description: errMsg,
      type: 'error'
    });
  };

  // Effects
  useEffect(() => {
    if (error) {
      openErrorNotification(getMessageFromError(error));
    }
  }, [error]);

  // Render
  return (
    <>
      <Table columns={columns} dataSource={data?.data} loading={isLoading} />
      {contextHolder}
    </>
  );
};

export default CategoryTable;
