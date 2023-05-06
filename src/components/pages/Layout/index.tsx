import { ReactNode } from 'react';

import Header from 'components/organisms/Header';
import SideBar from 'components/organisms/SideBar';
import './index.scss';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="layout">
      <Header />
      <SideBar />
      <main className="main">{children}</main>
    </div>
  );
}
