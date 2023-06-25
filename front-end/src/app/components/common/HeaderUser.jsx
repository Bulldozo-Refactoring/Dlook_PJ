import { getLogout } from 'app/slices/CookieSlice';
import { checkAuthentication } from 'app/store';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { Login, Logout } from '@mui/icons-material';
import { Avatar, Box, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material';

const HeaderUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const checkUser = checkAuthentication();
  const [openMenu, setOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const memberName = useSelector((state) => state.cookie.memberName);

  const handleLogout = async () =>
    dispatch(getLogout())
      .unwrap()
      .then((response) => window.location.reload())
      .catch((error) => console.log('로그아웃 실패!'));

  const handleClick = () => {
    if (checkUser) navigate('/mypages/certify');
    else navigate('/members/login');
  };
  const handleOpenMenu = (e) => {
    if (checkUser) {
      setAnchorEl(e.currentTarget);
      setOpenMenu(true);
    } else navigate('/members/login');
  };
  const handleCloseMenu = () => setOpenMenu(false);

  return (
    <>
      <React.Fragment>
        <PStyled>{memberName ? `${memberName} 님` : ''}</PStyled>
        {!checkUser ? (
          <BoxStyle>
            <Tooltip title="로그인">
              <LoginIcon onClick={handleClick} sx={{ fontSize: 35, color: 'var(--primary-200)' }}></LoginIcon>
            </Tooltip>
          </BoxStyle>
        ) : (
          <>
            <BoxStyle>
              <Tooltip title="내정보">
                <IconButton
                  onClick={handleClick}
                  onMouseOver={handleOpenMenu}
                  sx={{ ml: 2 }}
                  aria-controls={openMenu ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={openMenu ? 'true' : undefined}
                >
                  <Avatar sx={{ background: 'var(--primary-200)' }}></Avatar>
                </IconButton>
              </Tooltip>
            </BoxStyle>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={openMenu}
              onClose={handleCloseMenu}
              onClick={handleCloseMenu}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 23,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <Link to="/mypages/certify">
                <MenuItem onClick={handleCloseMenu}>
                  <Avatar sx={{ background: 'primary' }} />내 정보
                </MenuItem>
              </Link>
              <Link to="/">
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Link>
            </Menu>
          </>
        )}
      </React.Fragment>
    </>
  );
};
const PStyled = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: var(--bg-100);
`;
const BoxStyle = styled(Box)`
  display: flex;
  align-items: center;
  text-align: center;
`;
const LoginIcon = styled(Login)`
  path {
    color: var(--primary-200);
  }
`;

export default HeaderUser;
