import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';

import AdminAvatar from 'assets/images/woman.png';
import './index.scss';
import { deleteToken } from 'utils/storage';
import { ROUTE } from 'constants/routes';

export default function AdminSettingButton() {
  const navigate = useNavigate();
  const signOut = () => {
    deleteToken();
    navigate(ROUTE.SIGN_IN);
  };

  return (
    <Button
      type="primary"
      size="middle"
      onClick={signOut}
      className="admin-setting-button h-[48px] !rounded-[27px] pl-2 pr-4">
      <div className="flex justify-between items-center gap-5">
        <img src={AdminAvatar} alt="admin-avatar" width={34} height={34} />

        <FaSignOutAlt className="icon" />
      </div>
    </Button>
  );
}
