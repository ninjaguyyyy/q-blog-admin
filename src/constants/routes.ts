import loadable from '@loadable/component';
import { RouteConfig } from 'models/configuration';

export const routes: RouteConfig[] = [
  
  {
    path: '/',
    component: loadable(() => import('components/pages/Home'))
  },
  {
    path: '/list-user',
    component: loadable(() => import('components/pages/user/ListUser'))
  },
  {
    path: '/add-user',
    component: loadable(() => import('components/pages/user/AddUser'))
  },
  {
    path: '/sign-in',
    component: loadable(() => import('components/pages/SignIn'))
  },
  {
    path: '/blogs',
    component: loadable(() => import('components/pages/Blogs'))
  },
  {
    path: '/dashboard',
    component: loadable(() => import('components/pages/DashBoard'))
  },
  {
    path: '/profile',
    auth: true,
    component: loadable(() => import('components/pages/user/Profile'))
  }
 
];

export const ROUTE = {
  SIGN_IN: '/sign-in'
};
