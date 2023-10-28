import loadable from '@loadable/component';

import { RouteConfig } from 'models/configuration';

export const ROUTE = {
  HOME: '/',
  SIGN_IN: '/sign-in',

  DASHBOARD: '/',

  POST_MANAGEMENT: '/post-management',
  CREATE_POST: '/post-management/create',

  CATEGORY_MANAGEMENT: '/category-management',

  USER_MANAGEMENT: '/user-management'
};

export const routes: RouteConfig[] = [
  {
    path: ROUTE.HOME,
    component: loadable(() => import('components/pages/Home')),
    auth: true
  },
  {
    path: ROUTE.SIGN_IN,
    component: loadable(() => import('components/pages/SignIn')),
    withoutLayout: true
  },
  {
    path: ROUTE.POST_MANAGEMENT,
    component: loadable(() => import('components/pages/PostManagement'))
  },
  {
    path: ROUTE.CREATE_POST,
    component: loadable(() => import('components/pages/CreateOrUpdatePost'))
  },
  {
    path: ROUTE.DASHBOARD,
    component: loadable(() => import('components/pages/DashBoard'))
  },
  {
    path: ROUTE.CATEGORY_MANAGEMENT,
    component: loadable(() => import('components/pages/CategoryManagement')),
    auth: true
  }
];
