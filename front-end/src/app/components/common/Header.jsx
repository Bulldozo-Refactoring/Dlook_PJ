import { Close } from '@mui/icons-material';
import logo from 'app/assets/images/logo.svg';
import HeaderMenu from 'app/components/common/HeaderMenu';
import HeaderUser from 'app/components/common/HeaderUser';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { HeaderContainer, HeaderInner, HeaderWrapper, Img, LastLi, Li, MenuIconStyle, MenuUl } from 'app/style/StyleHeader';

const Header = () => {
  const [open, setMenu] = useState(false);
  const { pathname } = useLocation();
  const toggleMenu = () => setMenu((open) => !open);
  useEffect(() => setMenu(false), [pathname]);

  return (
    <>
      <HeaderContainer>
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
      </HeaderContainer>
    </>
  );
};

export default Header;
