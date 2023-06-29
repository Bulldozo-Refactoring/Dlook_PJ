import { Button, ForgotContainer, Form, Input, NavBack, StyleTitle } from 'app/style/StyleAuth';
import { useState } from 'react';
import { styled } from 'styled-components';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 비밀번호 찾기 로직 추가 필요
    setIsSubmitted(true);
  };

  return (
    <ForgotContainer>
      {isSubmitted ? (
        <PStyle>비밀번호 재설정 링크가 이메일로 전송되었습니다.</PStyle>
      ) : (
        <Form onSubmit={handleSubmit}>
          <StyleTitle>비밀번호 찾기</StyleTitle>
          <PStyle>
            이메일 주소를 입력하면
            <br />
            비밀번호 재설정 링크를 보내드립니다.
          </PStyle>
          <ForgotInput type="email" id="memberEmail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <StyleButton type="submit">비밀번호 재설정</StyleButton>
        </Form>
      )}
      <NavBack to="/members/login">돌아가기</NavBack>
    </ForgotContainer>
  );
};

const ForgotInput = styled(Input)`
  width: calc(50% - 200px);
  margin-bottom: 1rem;
`;
const PStyle = styled.p`
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.4rem;
`;
const StyleButton = styled(Button)`
  width: calc(50% - 200px);
  margin-bottom: 1rem !important;
`;
export default ForgotPassword;
