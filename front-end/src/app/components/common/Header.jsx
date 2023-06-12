import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import CloseIcon from "@mui/icons-material/Close";
import HeaderMenu from "./HeaderMenu";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderUser from "./HeaderUser";
import { styled } from "styled-components";

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
        <HeaderInner>
          <HeaderWrapper>
            <li>
              <MenuIcon
                sx={{ fontSize: 60, color: "#A6B1E1", zIndex: 1000 }}
                onClick={() => toggleMenu()}
              ></MenuIcon>
            </li>
            <li id="logo">
              <Link to="/">
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "100px", verticalAlign: "middle" }}
                />
              </Link>
            </li>
            <HeaderUser />
          </HeaderWrapper>
          <ul className={isOpen ? "show_menu" : "hide_menu"}>
            <CloseIcon onClick={() => toggleMenu()} />
            <HeaderMenu />
          </ul>
        </HeaderInner>
      </div>
    </>
  );
};

const HeaderInner = styled.div`
  margin: 0 auto;
  position: relative;
  padding: 0 40px;
`;

const HeaderWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 80px;
  color: inherit;
`;
export default Header;
