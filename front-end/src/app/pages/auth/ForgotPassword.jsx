import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import SubmitButton from "app/components/SubmitButton";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 비밀번호 찾기 로직 추가 필요

    setIsSubmitted(true);
  };

  return (
    <Container>
      {isSubmitted ? (
        <PStyle>비밀번호 재설정 링크가 이메일로 전송되었습니다.</PStyle>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Title>비밀번호 찾기</Title>
          <PStyle>
            이메일 주소를 입력하면
            <br />
            비밀번호 재설정 링크를 보내드립니다.
          </PStyle>
          <Input
            type="email"
            id="memberEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit">비밀번호 재설정</Button>
        </Form>
      )}
      <NavStyle to="/members/login">돌아가기</NavStyle>
    </Container>
  );
};
const Container = styled.div`
  padding: 100px 10px;
  text-align: center;
  * {
    font-weight: 500;
  }
`;
const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 35px;
  color: var(--text-100);
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Input = styled.input`
  width: calc(50% - 200px);
  height: 48px;
  padding: 0 10px;
  margin-bottom: 1rem;
  border-radius: 6px;
  box-sizing: border-box;
  background-color: var(--bg-200);
  ::placeholder {
    color: var(--bg-300);
  }
`;
const PStyle = styled.p`
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.4rem;
`;
const Button = styled(SubmitButton)`
  width: calc(50% - 200px);
  margin-bottom: 1rem !important;
  border-radius: 6px !important;
  color: var(--primary-100) !important;
`;
const NavStyle = styled(NavLink)`
  text-decoration: underline;
  color: var(--primary-200);
`;
export default ForgotPassword;
