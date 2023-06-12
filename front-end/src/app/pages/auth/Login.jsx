import React, { useEffect } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import google from "app/assets/images/google.png";
import { styled } from "styled-components";
import { login } from "app/slices/member";

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

  let onSubmit = (data) => {
    dispatch(login(data));
  };

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (isLoggedIn && user) {
      setCookie("isLoggedIn", "true", 7); // 7일
      setCookie("user", JSON.stringify(user), 7);
    }
  }, [isLoggedIn, user]);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {isLoggedIn ? (
          <p>Welcome, {user.username}!</p>
        ) : (
          <div
            style={{
              display: "inline-block",
              padding: "90px 40px 0",
              boxSizing: "border-box",
              maxWidth: "400px",
            }}
          >
            <Title>Login</Title>
            <LoginFrom
              method="post"
              id="login-form"
              // onSubmit={handleSubmit(onValid, onInvalid, onSubmit)}
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                id="email"
                name="userName"
                type="text"
                placeholder="Email"
                aria-invalid={
                  !isDirty ? undefined : errors.email ? "true" : "false"
                }
                {...register("email", {
                  required: "이메일은 필수 입력입니다.",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "이메일 형식에 맞지 않습니다.",
                  },
                  minLength: {
                    value: 5,
                    message: "too short",
                  },
                })}
              />
              {errors.email && (
                <small role="alert">{errors.email.message}</small>
              )}
              <Input
                id="password"
                name="userPassword"
                type="password"
                placeholder="****************"
                aria-invalid={
                  !isDirty ? undefined : errors.password ? "true" : "false"
                }
                {...register("password", {
                  required: "비밀번호는 필수 입력입니다.",
                  minLength: {
                    value: 8,
                    message: "8자리 이상 비밀번호를 사용하세요.",
                  },
                })}
              />
              {errors.password && (
                <small role="alert">{errors.password.message}</small>
              )}
              <Input01 type="submit" value="Login" disabled={isSubmitting} />
            </LoginFrom>
            <p style={{ marginBottom: "30px" }}>
              <button>
                <img src={google} alt="구글 로그인" />
              </button>
              <button id="searchpassword">비밀번호 찾기</button>
            </p>
            <div id="firstvisit">
              Dlook이 처음이신가요?
              <NavLink id="signup" to="/member/join">
                회원가입
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 35px;
  font-weight: 500;
  color: var(--text-100);
  text-align: center;
`;
const LoginFrom = styled.form``;
const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 10px;
  box-sizing: border-box;
  margin-bottom: 16px;
  border-radius: 6px;
  background-color: var(--bg-200);
  ::placeholder {
    color: var(--bg-300);
  }
`;
const Input01 = styled(Input)`
  color: var(--bg-100);
  font-size: 16px;
  background-color: var(--primary-200) !important;
  margin-top: 20px;
`;
export default Login;
