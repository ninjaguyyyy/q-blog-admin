import { ReactNode } from 'react';

export type SidebarItem = {
  title: string;
  subs: SubSidebarItem[];
};

type SubSidebarItem = {
  title: string;
  link: string;
  icon: ReactNode;
};
