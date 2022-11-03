import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import "./navbar.scss";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Toggle: false, count: 1 };
  }
  Toggle = () => {
    this.setState({ Toggle: !this.state.Toggle });
  };
  // async componentDidMount() {
  //   this.CountTime = await setInterval(() => {
  //     this.setState({ count : this.state.count + 1});
  //     console.log(this.state.count);
  //   }, 2000);
  // }
  componentWillUnmount() {
    if(this.CountTime){
      clearInterval(this.CountTime)
    }

  }
  render() {
    return (
      <div>
        <div className="header-navbar">
          <ul className="header-navbar-list">
            <li className="header-navbar-item">
              <NavLink to="/">home</NavLink>
            </li>
            <li className="header-navbar-item">
              <NavLink to="/about">about</NavLink>
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
          <div className="icon" id="iconMenu">
            <MenuOutlined onClick={this.Toggle} />
          </div>
          <div
            className={this.state.Toggle ? "sub-menu block" : "sub-menu none"}
            id="subMenu"
          >
            <ul className="list">
              <li className="header-navbar-item">
                <NavLink to="/">home</NavLink>
              </li>
              <li className="header-navbar-item">
                <NavLink to="/about">about</NavLink>
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
}

export default Navbar;
