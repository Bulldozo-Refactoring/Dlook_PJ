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
  position: relative;
  margin: 0 auto;
  padding: 0 40px;
`;
const HeaderWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.common.xlarge};
  margin: 0 auto;
  color: inherit;
  line-height: 80px;
`;
const Li = styled.li`
  width: ${({ theme }) => theme.common.col3};
  height: 80px;
  text-align: center;
`;
const LastLi = styled(Li)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuIconStyle = styled(Menu)`
  cursor: pointer;
  float: left;
  height: 100% !important;
  * {
    color: ${({ theme }) => theme.color.c05};
  }
`;
const MenuUl = styled.ul`
  padding: 100px 50px 20px;
  width: ${({ theme }) => theme.common.col12};
  height: 320px;
  position: absolute;
  top: ${(props) => (props.open ? '0' : '-999px')};
  left: 0;
  transition: 0.7s;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.light.b01};
  box-shadow: 0 1px 5px 4px ${({ theme }) => theme.color.c01};
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
