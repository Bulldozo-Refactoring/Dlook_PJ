import { StyleTitle } from 'app/style/StyleAuth';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const JoinResult = () => {
  return (
    <>
      <Container>
        <StyleTitle>회원가입이 정상적으로 완료되었습니다.</StyleTitle>
        <NavStyle to="/members/login">로그인하러 가기</NavStyle>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 20px;
`;
const NavStyle = styled(NavLink)`
  text-decoration: underline;
  color: ${({ theme }) => theme.color.c05};
`;
export default JoinResult;
