import { BellOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import IconButton from 'components/atoms/IconButton';
import AdminSettingButton from 'components/molecules/AdminSettingButton';
import './index.scss';

export default function Header() {
  return (
    <div className="flex header items-center justify-between">
      {/* Brand Logo */}
      <Link to={'/'}>
        <div className="flex items-center cursor-pointer">
          <img className="h-6 w-6" src="/vite.svg" alt="Logo" />
          <p className="px-3 font-bold">Q-BLOG ADMIN</p>
        </div>
      </Link>

      {/* Header Actions */}
      <div className="flex items-center gap-6 space-x-1">
        <IconButton icon={<BellOutlined />} />
        <AdminSettingButton />
      </div>
    </div>
  );
}
