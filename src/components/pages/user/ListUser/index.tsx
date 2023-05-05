import React, { useState, useEffect } from 'react';
import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  mail: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'User Id',
    dataIndex: 'id'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  },
  {
    title: 'Mail',
    dataIndex: 'mail'
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render: (_, record) => <Button onClick={() => handleEdit(record)}>Edit</Button>
  }
];

const App: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchUserData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const users = data.map((user: any) => ({
          key: user.id,
          name: user.name,
          id: user.id,
          address: user.address.street,
          mail: user.email
        }));
        setIsLoading(false);
        setUsers(users);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  };
  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div>
      <p>List User</p>
      <div style={{ marginBottom: 10 }}>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={users} />
    </div>
  );
};

export default App;
