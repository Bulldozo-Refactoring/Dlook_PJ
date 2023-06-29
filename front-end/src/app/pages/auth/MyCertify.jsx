import logo from 'app/assets/images/logo.svg';
import Mymenu from 'app/components/Mymenu';
import { getBackUsers } from 'app/slices/BackUserSlice';
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
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const MyCertify = () => {
  const dispatch = useDispatch();
  const [usersName, setUsersName] = useState(null);
  // const [info, setInfo] = useState([]);

  useEffect(() => {
    setUsersName(setMemberName());
    if (usersName !== null) {
      dispatch(getBackUsers(usersName));
    }
  }, [dispatch, usersName]);

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
                <BlueText>딸기너구리</BlueText>
              </div>
              <div style={{ width: '70%', textAlign: 'left', padding: '0 30px' }}>
                <PinkText02>User Bio - 힘들어요 제법 쓰러질듯해요</PinkText02>
                <div>
                  <div>
                    <WhiteText>SolvedCount</WhiteText>
                    <PinkText03>2658</PinkText03>
                  </div>
                  <div>
                    <WhiteText>exp</WhiteText>
                    <PinkText03>48469349284</PinkText03>
                  </div>
                  <div>
                    <WhiteText>Class</WhiteText>
                    <PinkText03>8</PinkText03>
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
