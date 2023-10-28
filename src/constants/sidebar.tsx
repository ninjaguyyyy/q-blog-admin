import { BlockOutlined, DatabaseOutlined, UserOutlined } from '@ant-design/icons';

import { ROUTE } from 'constants/routes';
import { SidebarItem } from 'models/sidebar-item';

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    title: 'Dashboard',
    subs: [
      {
        title: 'Dashboard',
        link: ROUTE.DASHBOARD,
        icon: <DatabaseOutlined />
      }
    ]
  },
  {
    title: 'Posts',
    subs: [
      {
        title: 'List',
        link: ROUTE.POST_MANAGEMENT,
        icon: <BlockOutlined />
      },
      {
        title: 'Create',
        link: ROUTE.CREATE_POST,
        icon: <UserOutlined />
      }
    ]
  },
  {
    title: 'Categories',
    subs: [
      {
        title: 'Management',
        link: ROUTE.CATEGORY_MANAGEMENT,
        icon: <BlockOutlined />
      }
    ]
  },
  {
    title: 'Users',
    subs: [
      {
        title: 'Users List',
        link: ROUTE.USER_MANAGEMENT,
        icon: <BlockOutlined />
      }
    ]
  }
];
