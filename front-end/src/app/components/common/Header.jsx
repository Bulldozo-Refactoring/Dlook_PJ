import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { styled } from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderMenu from "./HeaderMenu";
import HeaderUser from "./HeaderUser";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  const [isOpen, setMenu] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => setMenu((isOpen) => !isOpen);
  useEffect(() => setMenu(false), [pathname]);

  return (
    <>
      <div id="header">
        <HeaderInner>
          <HeaderWrapper>
            <Li>
              <MenuIconStyle
                style={{ fontSize: "60px" }}
                onClick={() => toggleMenu()}
              ></MenuIconStyle>
            </Li>
            <Li>
              <Link to="/">
                <Img src={logo} alt="logo" />
              </Link>
            </Li>
            <HeaderUser />
          </HeaderWrapper>
          <Menu isOpen={isOpen ? 1 : 0}>
            <CloseIcon onClick={() => toggleMenu()} />
            <HeaderMenu />
          </Menu>
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
const Li = styled.li`
  width: 100px;
  height: 80px;
  text-align: center;
`;
const MenuIconStyle = styled(MenuIcon)`
  position: absolute;
  top: 10%;
  left: 40px;
  cursor: pointer;
  * {
    color: var(--primary-200);
  }
`;
const Menu = styled.ul`
  padding: 100px 50px 20px;
  width: 100%;
  height: 320px;
  position: absolute;
  top: ${(props) => (props.isOpen ? "0" : "-999px")};
  left: 0;
  transition: 0.7s;
  display: flex;
  justify-content: space-around;
  background-color: var(--bg-100);
  box-shadow: 0 1px 5px 4px var(--bg-300);
  font-weight: 500;
`;

const Img = styled.img`
  display: inline;
  vertical-align: middle;
  width: 100px;
  * {
    color: inherit;
  }
`;
export default Header;
