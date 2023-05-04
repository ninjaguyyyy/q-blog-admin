import React, { useState } from 'react';
import './index.scss';

export default function UserManage() {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleClick = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <div className="menu">
      <div className="menu-item" onClick={handleClick}>
        User Manager
      </div>
      {submenuOpen && (
        <div className="submenu">
          <div className="submenu-item">List User</div>
          <div className="submenu-item">Add User</div>
          <div className="submenu-item">Edit User</div>
        </div>
      )}
    </div>
  );
}
