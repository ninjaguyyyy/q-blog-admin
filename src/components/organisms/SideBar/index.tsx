import SideBarItem from 'components/molecules/SideBarItem';
import { SIDEBAR_ITEMS } from 'constants/sidebar';

import './index.scss';

export default function SideBar() {
  return (
    <div className="sidebar flex flex-col">
      {SIDEBAR_ITEMS.map((item, i) => (
        <div key={i}>
          <SideBarItem item={item} />
          {i !== SIDEBAR_ITEMS.length - 1 && <hr className="my-3"></hr>}
        </div>
      ))}
    </div>
  );
}
