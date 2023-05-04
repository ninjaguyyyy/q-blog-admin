import React, { useState } from 'react';
import './index.scss';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';

export default function MyMenu() {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleClick = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <BrowserRouter>
      <div className="menu">
        <div className="menu-item" onClick={handleClick}>
          Authentication
        </div>
        {submenuOpen && (
          <div className="submenu">
            <Link to="sign-in" className="submenu-item" reloadDocument>
              Login
            </Link>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}
