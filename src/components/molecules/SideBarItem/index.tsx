import { NavLink, useLocation } from 'react-router-dom';

import { SidebarItem } from 'models/sidebar-item';
import './index.scss';

type Props = {
  item: SidebarItem;
};

export default function SideBarItem({ item }: Props) {
  const { title, subs } = item;
  const location = useLocation();

  return (
    <ul className="sidebar-item text-sm">
      <span className="font-medium block mb-3">{title}</span>
      {subs.map((subItem, i) => {
        const isSamePathname = subItem.link === location.pathname;
        return (
          <NavLink
            key={i}
            to={subItem.link}
            className={({ isActive }) =>
              `${
                isActive && isSamePathname ? 'active' : ''
              } link py-[12px] pl-[16px] pr-[24px] mt-1`
            }>
            <div className="flex items-center gap-4 pl-3">
              {subItem.icon}
              <span>{subItem.title}</span>
            </div>
          </NavLink>
        );
      })}
    </ul>
  );
}
