import loadable from '@loadable/component';

import { RouteConfig } from 'models/configuration';

export const routes: RouteConfig[] = [
  {
    path: '/',
    component: loadable(() => import('components/pages/Home'))
  },
  {
    path: '/sign-in',
    component: loadable(() => import('components/pages/SignIn'))
  },
  {
    path: '/blogs',
    component: loadable(() => import('components/pages/PostManagement'))
  },
  {
    path: '/dashboard',
    component: loadable(() => import('components/pages/DashBoard'))
  },
  {
    path: '/category-management',
    component: loadable(() => import('components/pages/CategoryManagement'))
  }
];

export const ROUTE = {
  SIGN_IN: '/sign-in'
};
