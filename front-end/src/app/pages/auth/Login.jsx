import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import google from "app/assets/images/google.png";
import { styled } from "styled-components";
import { login } from "app/slices/auth";

function Login() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();

  // const onValid = (data) => console.log(data, "onvalid");
  // const onInvalid = (data) => console.log(data, "onInvalid");

  let onSubmit = (data) => {
    // await new Promise((r) => setTimeout(r, 1000));
    // alert(JSON.stringify(data));
    dispatch(login(data));
  };

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    console.log("isLoggedIn", isLoggedIn);
    console.log("user", user);
  }, [isLoggedIn, user]);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "inline-block",
            padding: "90px 40px 0",
            boxSizing: "border-box",
            maxWidth: "450px",
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
            {errors.email && <small role="alert">{errors.email.message}</small>}
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
            <NavLink id="signup" to="/member/signup">
              회원가입
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

const Title = styled.h1`
  font-size: 30px;
  color: var(--text-100);
  margin-bottom: 20px;
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
  background-color: #f5f5f5;
  ::placeholder {
    color: #ccc;
  }
`;
const Input01 = styled(Input)`
  color: #fff;
  font-size: 16px;
  background-color: #a6b1e1 !important;
  margin-top: 20px;
`;
export default Login;
