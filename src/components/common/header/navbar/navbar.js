import React , { useState } from "react";
import { MenuOutlined } from '@ant-design/icons';
import './navbar.scss';

export default function Navbar() {
  const [Toggle, setToggle] = useState(false);
  const handleClinkMenu = () => {
      setToggle(!Toggle)
  }
  return (
    <div>
      <div className="header-navbar">
        <ul className="header-navbar-list">
          <li className="header-navbar-item">
            <a href="/">home</a>
          </li>
          <li className="header-navbar-item">
            <a href="/">About</a>
          </li>
          <li className="header-navbar-item">
            <a href="/">Testimonials</a>
          </li>
          <li className="header-navbar-item">
            <a href="/">contact</a>
          </li>
        </ul>
      </div>
      <div className="menu-mobile" id="menu">
        <div className="icon" id="iconMenu" >
        <MenuOutlined onClick={handleClinkMenu}  />
        </div>
        <div className={Toggle === true ? "sub-menu block" : "sub-menu none"} id="subMenu">
          <ul className="list">
            <li className="item">
              <a href="/">home</a>
            </li>
            <li className="item">
              <a href="/">About</a>
            </li>
            <li className="item">
              <a href="/">Testimonials</a>
            </li>
            <li className="item">
              <a href="/">contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
