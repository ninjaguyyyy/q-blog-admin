import React, { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
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
        <BrowserRouter>
          <div className="submenu">
            <Link to='list-user' className="submenu-item" reloadDocument>List User</Link>
            <Link to='add-user' className="submenu-item" reloadDocument>Add User</Link>
            <Link to='edit-user' className="submenu-item" reloadDocument>Edit User</Link>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}
