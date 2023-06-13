import React, { useEffect } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import { login } from "app/slices/member";
import google from "app/assets/images/google.png";

// 쿠키 설정
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setDate(expires.getDate() + days);

  const cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )}; expires=${expires.toUTCString()}; path=/`;
  document.cookie = cookie;
}

// 쿠키 읽기
function getCookie(name) {
  const cookie = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
  return cookie ? decodeURIComponent(cookie[2]) : null;
}

function Login() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();

  let onSubmit = (data) => dispatch(login(data));

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (isLoggedIn && user) setCookie("isLoggedIn", "true", 7); // 7일 - setCookie("user", JSON.stringify(user), 7);
  }, [isLoggedIn, user]);

  return (
    <>
      <Container>
        {isLoggedIn ? (
          <Navigate to="/" />
        ) : (
          <Wrap>
            <Title>Login</Title>
            <LoginFrom method="post" onSubmit={handleSubmit(onSubmit)}>
              <Box>
                <Input
                  id="member_email"
                  name="member_email"
                  type="text"
                  placeholder="Email"
                  aria-invalid={
                    !isDirty
                      ? undefined
                      : errors.member_email
                      ? "true"
                      : "false"
                  }
                  {...register("member_email", {
                    required: "이메일은 필수 입력입니다.",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "이메일 형식에 맞지 않습니다.",
                    },
                    minLength: {
                      value: 5,
                      message: "5자 이상으로 적어주세요.",
                    },
                  })}
                />
                {errors.member_email && (
                  <Small role="alert">{errors.member_email.message}</Small>
                )}
              </Box>
              <Box>
                <Input
                  id="member_pw"
                  name="member_pw"
                  type="password"
                  placeholder="****************"
                  aria-invalid={
                    !isDirty ? undefined : errors.member_pw ? "true" : "false"
                  }
                  {...register("member_pw", {
                    required: "비밀번호는 필수 입력입니다.",
                    minLength: {
                      value: 8,
                      message: "8자리 이상 비밀번호를 사용하세요.",
                    },
                  })}
                />
                {errors.member_pw && (
                  <Small role="alert">{errors.member_pw.message}</Small>
                )}
              </Box>
              <Input01 type="submit" value="Login" disabled={isSubmitting} />
            </LoginFrom>
            <p style={{ marginBottom: "30px" }}>
              <img src={google} alt="구글 로그인" onClick={() => {}} />
              <NavStyleR to="/">비밀번호 찾기</NavStyleR>
            </p>
            <div style={{ textAlign: " center" }}>
              Dlook이 처음이신가요?
              <NavStyle to="/member/join">회원가입</NavStyle>
            </div>
          </Wrap>
        )}
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  * {
    font-weight: 500;
  }
`;
const Wrap = styled.div`
  display: inline-block;
  padding: 90px 40px 0;
  width: 400px;
  box-sizing: border-box;
`;
const LoginFrom = styled.form``;
const Box = styled.div`
  position: relative;
`;
const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 35px;
  color: var(--text-100);
  text-align: center;
`;
const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 10px;
  margin-bottom: 2rem;
  border-radius: 6px;
  box-sizing: border-box;
  background-color: var(--bg-200);
  ::placeholder {
    color: var(--bg-300);
  }
`;
const Input01 = styled(Input)`
  color: var(--bg-100);
  font-size: 16px;
  background-color: var(--primary-200) !important;
`;
const Small = styled.small`
  position: absolute;
  left: 5px;
  bottom: 5px;
  color: red;
`;
const NavStyle = styled(NavLink)`
  margin-left: 10px;
  color: #6a24fe;
  font-size: 16px;
`;
const NavStyleR = styled(NavStyle)`
  float: right;
`;

export default Login;
