import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, login } from "app/slices/member";
import { styled } from "styled-components";
import Cookies from "js-cookie";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Logout from "@mui/icons-material/Logout";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";

function HeaderUser() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleLogout = () => {
    // 로그아웃 시  로그인 상태 및  유저 정보 쿠키 삭제
    Cookies.remove("isLoggedIn");
    // Cookies.remove("user");
    dispatch(logout());
  };

  useEffect(() => {
    // 페이지가 로드될 때 쿠키에서 로그인 정보를 읽어와 Redux 상태에 반영
    const storedLoginStatus = Cookies.get("isLoggedIn");
    // 쿠키에 저장된 로그인 상태가 true인 경우 Redux 상태를 업데이트
    if (storedLoginStatus === "true") dispatch(login()); // 로그인 액션을 디스패치
  }, [dispatch]);

  const linkTo = isLoggedIn ? "/mypages/certify" : "/member/login";

  return (
    <>
      <li>
        <React.Fragment>
          <Link to={linkTo}>
            <BoxStyle>
              <Tooltip title="내 정보">
                <IconButton
                  onClick={handleClick}
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar sx={{ background: "var(--primary-200)" }}></Avatar>
                </IconButton>
              </Tooltip>
            </BoxStyle>
          </Link>
          {isLoggedIn && ( // 로그인 상태에서만 보이도록 조건부 렌더링
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 23,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <Link to="/mypages/certify">
                <MenuItem onClick={handleClose}>
                  <Avatar sx={{ background: "var(--primary-200)" }} />내 정보
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
          )}
        </React.Fragment>
      </li>
    </>
  );
}

const BoxStyle = styled(Box)`
  display: flex;
  align-items: center;
  text-align: center;
`;
export default HeaderUser;
