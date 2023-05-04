import { BellOutlined, SettingOutlined } from '@ant-design/icons';
import './index.scss';
export default function Header() {
  return (
    <div className="flex header items-center justify-between">
      <div className="flex items-center">
        <img className="h-10 w-10" src="/vite.svg" alt="Logo" />
        <p className="px-5">BLOCK MANAGER</p>
      </div>
      <div className="flex flex-row space-x-1">
        <div className='px-5'><button
          className="w-10 h-10 hover:bg-violet-400"
          onClick={() => {
            alert('Noti');
          }}>
          {' '}
          <BellOutlined />
        </button></div>
        <button
          className="w-10 h-10 hover:bg-violet-400"
          onClick={() => {
            alert('Setting');
          }}>
          <SettingOutlined />
        </button>
      </div>
    </div>
  );
}
