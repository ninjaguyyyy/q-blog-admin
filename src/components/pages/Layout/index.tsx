import { ReactNode } from 'react';
import Footer from 'components/organisms/Footer';
import Header from 'components/organisms/Header';
import SideBar from 'components/organisms/SideBar';
import './index.scss';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="layout">
      <Header className="header" />
      <SideBar className="sidebar" />
      <main className="main">{children}</main>
      <Footer className="footer" />
    </div>
  );
}
