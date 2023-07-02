// [ ] 추후 정리 필요
import { Card, CardContent, Typography } from '@mui/material';
import { SubmitButton } from 'app/style/GlobalStyle';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import mainBack01 from 'app/assets/images/mainBack01.png';
import mainBack02 from 'app/assets/images/mainBack02.png';

const Main = styled.div`
  height: 100%;
  h1 {
    margin-bottom: 30px;
    font-size: 60px;
    font-weight: 500;
    line-height: 66px;
  }
  p {
    margin-bottom: 2rem;
  }
`;
const MainBox01 = styled(Main)`
  padding: 100px 40px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${mainBack01});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  text-align: center;
  font-size: 20px;
  line-height: 26px;
  font-weight: 300;
  z-index: 1;
  *,
  button {
    color: ${({ theme }) => theme.light.b01};
  }
`;
const MainBox02 = styled(Main)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 50%;
  margin-left: auto;
  padding: 15% 40px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 300;
  &::before {
    content: '';
    position: absolute;
    top: 33%;
    left: -100%;
    width: 80%;
    height: 450px;
    background: url(${mainBack02}) no-repeat center center;
    background-size: cover;
    background-attachment: fixed !important;
  }
  button {
    padding: 3px 20px;
    font-size: 13px;
    color: ${({ theme }) => theme.color.c05};
    background-color: ${({ theme }) => theme.light.b03};
  }
`;
const MainBox03 = styled(Main)`
  padding: 80px calc(50% - 400px);
  background-color: ${({ theme }) => theme.light.b03};
  text-align: center;
`;
const NoticeUl = styled.ul`
  text-align: center;
  li {
    display: inline-flex;
    align-items: center;
    margin-bottom: 2rem;
    padding: 20px 15px;
    background-color: ${({ theme }) => theme.light.b01};
  }
`;
const NoticeNav = styled(NavLink)`
  display: inline-block;
  margin-right: 20px;
  position: relative;
  padding-top: 12px;
  font-size: 100px;
  line-height: 0;
  font-weight: 600;
  color: ${({ theme }) => theme.color.c05};
  z-index: 1;
  &::before {
    content: '';
    position: absolute;
    top: -24px;
    left: -3px;
    width: 57px;
    height: 57px;
    background-color: ${({ theme }) => theme.light.t03};
    z-index: -1;
  }
`;
const NoticeDiv = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  width: 600px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const MainCard = () => {
  return (
    <Card sx={{ maxWidth: '86%', minHeight: '230px' }}>
      <CardContent sx={{ paddingBottom: 0 }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Bulldozo
        </Typography>
        <Typography sx={{ mb: 1.5 }} variant="h5" component="div">
          풀스택 개발자
        </Typography>
        <Typography variant="body2">
          안녕하세요.
          <br />
          Dlook 개발자들 입니다.......
        </Typography>
        <SubmitButton size="small">GitHub Link</SubmitButton>
      </CardContent>
    </Card>
  );
};

export { Main, MainBox01, MainBox02, MainBox03, NoticeDiv, NoticeNav, NoticeUl };
export default MainCard;
