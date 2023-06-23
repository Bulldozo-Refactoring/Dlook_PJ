import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

function JoinResult() {
  return (
    <>
      <Container>
        <H1>회원가입이 정상적으로 완료되었습니다.</H1>
        <NavStyle to="/members/login">로그인하러 가기</NavStyle>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 20px;
`;
const H1 = styled.h1`
  margin: 5rem 0;
  text-align: center;
  font-size: 45px;
  line-height: 51px;
`;
const NavStyle = styled(NavLink)`
  text-decoration: underline;
  color: var(--primary-200);
`;
export default JoinResult;
