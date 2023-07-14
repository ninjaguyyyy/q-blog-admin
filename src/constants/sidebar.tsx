import { BlockOutlined, DatabaseOutlined, UserOutlined } from '@ant-design/icons';

import { SidebarItem } from 'models/sidebar-item';

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    title: 'Dashboard',
    subs: [
      {
        title: 'Dashboard',
        link: '/dashboard',
        icon: <DatabaseOutlined />
      }
    ]
  },
  {
    title: 'Posts',
    subs: [
      {
        title: 'Posts List',
        link: '/users',
        icon: <BlockOutlined />
      },
      {
        title: 'Create/Update Post',
        link: '/users',
        icon: <UserOutlined />
      }
    ]
  },
  {
    title: 'Categories',
    subs: [
      {
        title: 'Management',
        link: '/category-management',
        icon: <BlockOutlined />
      }
    ]
  },
  {
    title: 'Users',
    subs: [
      {
        title: 'Users List',
        link: '/users',
        icon: <BlockOutlined />
      },
      {
        title: 'Create User',
        link: '/users',
        icon: <UserOutlined />
      }
    ]
  }
];
