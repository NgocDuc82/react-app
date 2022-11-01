import React from "react";
import Logo from './logo/logo';
import Navbar from './navbar/navbar';
import './header.scss'
const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;
