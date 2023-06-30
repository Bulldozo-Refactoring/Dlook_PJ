import logo from 'app/assets/images/logo.svg';
import Mymenu from 'app/components/Mymenu';
import { setMemberName } from 'app/store';
import { SubmitButton } from 'app/style/GlobalStyle';
import {
  After,
  Before,
  BlueText,
  Circle,
  Container,
  Content,
  Img,
  PinkText01,
  PinkText02,
  PinkText03,
  Right,
  StyleLi,
  StyleP,
  StyleTitle,
  StyleUl,
  WhiteText,
} from 'app/style/StyleMypage';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

const MyCertify = () => {
  // const userInfo = useSelector((state) => state.backUser.userInfo);
  const userInfo = Cookies.get('userInfo');
  const [info, setInfo] = useState([]);
  const [usersName, setUsersName] = useState(null);

  useEffect(() => {
    setUsersName(setMemberName());
    if (userInfo) {
      const cookieUserInfo = JSON.parse(userInfo);
      setInfo(cookieUserInfo);
    }
  }, [userInfo, usersName]);

  // 연동 후
  return (
    <Container>
      <StyleTitle>내정보</StyleTitle>
      <Content>
        <Mymenu />
        <Right>
          {usersName !== null ? (
            <After>
              <div style={{ width: '30%' }}>
                <Circle></Circle>
                <PinkText01>Sliver</PinkText01>
                <BlueText>{info.user}</BlueText>
              </div>
              <div style={{ width: '70%', textAlign: 'left', padding: '0 30px' }}>
                <PinkText02>User Bio - 나는야 퉁퉁이</PinkText02>
                <div>
                  <div>
                    <WhiteText>SolvedCount</WhiteText>
                    <PinkText03>{info.solvedCount}</PinkText03>
                  </div>
                  <div>
                    <WhiteText>Rating</WhiteText>
                    <PinkText03>{info.rating}</PinkText03>
                  </div>
                  <div>
                    <WhiteText>Class</WhiteText>
                    <PinkText03>{info.tier}</PinkText03>
                  </div>
                </div>
              </div>
            </After>
          ) : (
            <Before>
              <Img src={logo} alt="logo" />
              <StyleP>
                해당 페이지는 백준 아이디를 연동해야만 사용 가능합니다.
                <br />
                연동에 성공하면 해당 기능을 사용할 수 있습니다.
              </StyleP>
              <StyleUl>
                <StyleLi>사용 가능 기능1</StyleLi>
                <StyleLi>사용 가능 기능2</StyleLi>
                <StyleLi>사용 가능 기능3</StyleLi>
              </StyleUl>
              <SubmitButton style={{ color: 'var(--text-100)', width: '40%' }}>백준 연동하러 가기</SubmitButton>
            </Before>
          )}
        </Right>
      </Content>
    </Container>
  );
};

export default MyCertify;
