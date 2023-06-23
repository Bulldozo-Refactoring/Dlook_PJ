import { Close, Menu } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import logo from 'app/assets/images/logo.svg';
import HeaderMenu from 'app/components/common/HeaderMenu';
import HeaderUser from 'app/components/common/HeaderUser';

const Header = () => {
  const [open, setMenu] = useState(false);
  const { pathname } = useLocation();
  const toggleMenu = () => setMenu((open) => !open);
  useEffect(() => setMenu(false), [pathname]);

  return (
    <>
      <div id="header">
        <HeaderInner>
          <HeaderWrapper>
            <Li>
              <MenuIconStyle sx={{ fontSize: '50px' }} onClick={() => toggleMenu()}></MenuIconStyle>
            </Li>
            <Li>
              <Link to="/">
                <Img src={logo} alt="logo" />
              </Link>
            </Li>
            <LastLi>
              <HeaderUser />
            </LastLi>
          </HeaderWrapper>
          <MenuUl open={open ? 1 : 0}>
            <Close onClick={() => toggleMenu()} />
            <HeaderMenu />
          </MenuUl>
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
  width: 200px;
  height: 80px;
  text-align: center;
`;
const LastLi = styled(Li)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuIconStyle = styled(Menu)`
  position: absolute;
  top: 15px;
  left: 40px;
  cursor: pointer;
  * {
    color: var(--primary-200);
  }
`;
const MenuUl = styled.ul`
  padding: 100px 50px 20px;
  width: 100%;
  height: 320px;
  position: absolute;
  top: ${(props) => (props.open ? '0' : '-999px')};
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
