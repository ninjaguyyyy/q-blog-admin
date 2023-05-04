import { KeyOutlined, UserOutlined, BlockOutlined, DatabaseOutlined } from '@ant-design/icons';
import { Scrollbars } from 'react-custom-scrollbars';
import Authen from 'components/sidelay/Authen';
import UserManage from 'components/sidelay/UserManager';
import BlogManager from 'components/sidelay/Blog';
import DashBoard from 'components/sidelay/Dashboard';
import './index.scss';

export default function SideBar() {
  return (
    <Scrollbars style={{ top: 0, height: 450 }}>
      <div className="siderbar flex flex-col">
        <ul>
          <p>Pages</p>
          <a className="authen">
            <div>
              <KeyOutlined />
            </div>
            <div>
              {' '}
              <Authen />{' '}
            </div>
          </a>
        </ul>
        <hr></hr>
        <ul>
          <p>User</p>
          <a className="user-manager">
            <div>
              <UserOutlined />
            </div>
            <div>
              <UserManage />
            </div>
          </a>
          <hr></hr>
        </ul>
        <ul>
          {' '}
          <p>Blog</p>
          <a className="block-manager">
            <div>
              <BlockOutlined />
            </div>
            <div>
              <BlogManager />
            </div>
          </a>
        </ul>
        <hr></hr>
        <ul>
          <p>Dashboard</p>
          <a className="dasboard">
            <DatabaseOutlined />
            <div>
              <DashBoard />
            </div>
          </a>
        </ul>
      </div>
    </Scrollbars>
  );
}
