import { SettingOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import AdminAvatar from 'assets/images/woman.png';
import './index.scss';

export default function AdminSettingButton() {
  return (
    <Button
      type="primary"
      size="middle"
      className="admin-setting-button h-[48px] !rounded-[27px] pl-2 pr-4">
      <div className="flex justify-between items-center gap-5">
        <img src={AdminAvatar} alt="admin-avatar" width={34} height={34} />
        <SettingOutlined className="icon " />
      </div>
    </Button>
  );
}
