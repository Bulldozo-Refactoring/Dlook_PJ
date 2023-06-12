import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import CloseIcon from "@mui/icons-material/Close";
import HeaderMenu from "./HeaderMenu";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderUser from "./HeaderUser";

const Header = () => {
  const [isOpen, setMenu] = useState(false);
  const { pathname } = useLocation();
  const toggleMenu = () => {
    setMenu((isOpen) => !isOpen);
  };
  useEffect(() => {
    setMenu(false);
  }, [pathname]);

  return (
    <>
      <div id="header">
        <div className="header_inner">
          <ul className="header_wrapper">
            <li>
              <MenuIcon
                sx={{ fontSize: 60, color: "#A6B1E1", zIndex: 1000 }}
                onClick={() => toggleMenu()}
              ></MenuIcon>
            </li>
            <li id="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </li>
            <HeaderUser />
          </ul>
          <ul className={isOpen ? "show_menu" : "hide_menu"}>
            <CloseIcon onClick={() => toggleMenu()} />
            <HeaderMenu />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
