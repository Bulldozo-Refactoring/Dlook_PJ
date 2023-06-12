import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { styled } from "styled-components";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
    setError,
    clearErrors,
  } = useForm();

  const [isEmailSent, setIsEmailSent] = useState(false); // 이메일 전송 여부 상태
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [remainingTime, setRemainingTime] = useState(60);

  const sendVerificationEmail = () => {
    // 이메일 전송 로직 작성
    // 성공적으로 이메일을 전송했다면 setIsEmailSent(true)로 상태 변경
    setIsEmailSent(true);
    setVerificationCode({ value: "", isValid: false }); // verificationCode 초기화
    startTimer();
  };

  const startTimer = () => {
    let seconds = 300;
    const timer = setInterval(() => {
      seconds--;
      setRemainingTime(seconds);
      if (seconds === 0) {
        clearInterval(timer);
      }
    }, 1000);
  };

  const verifyCode = () => {
    // 인증 코드 확인 로직 작성
    // 인증 코드가 맞다면 setIsVerified(true)로 상태 변경
    setIsVerified(true);
    clearErrors("verificationCode"); // 에러 메시지 제거
    console.log(verificationCode); // 확인용
  };

  const onSubmit = (data) => {
    // 회원가입 처리 로직 작성
    console.log(data);
  };

  useEffect(() => {
    if (remainingTime === 0) {
      setIsEmailSent(false);
    }
  }, [remainingTime]);

  return (
    <SignUpTemplate>
      <Title>Sign Up</Title>
      <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: "20px" }}>
        <FormStyle>
          <Label>이메일</Label>
          <Input
            type="text"
            {...register("email", {
              required: "이메일은 필수로 작성해주세요.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "올바른 이메일 형식을 입력해주세요.",
              },
            })}
          />
        </FormStyle>
        {errors.email && (
          <ErrorMessage role="alert">{errors.email.message}</ErrorMessage>
        )}
        {isEmailSent ? (
          <FormStyle>
            <Label01>인증번호</Label01>
            <Input01
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              {...register("verificationCode", {
                required: "인증 번호를 적어주세요.",
              })}
            />
            {errors.verificationCode && (
              <ErrorMessage role="alert">
                {errors.verificationCode.message}
              </ErrorMessage>
            )}
            <RemainingTime>{remainingTime}초</RemainingTime>
            {isVerified ? (
              <VerificationMessage>PASS</VerificationMessage>
            ) : (
              <VerifyButton type="button" onClick={verifyCode}>
                확인
              </VerifyButton>
            )}
          </FormStyle>
        ) : (
          <FormStyle>
            <SendButton type="button" onClick={sendVerificationEmail}>
              전송
            </SendButton>
          </FormStyle>
        )}
        <FormStyle>
          <Label>이름</Label>
          <Input
            type="text"
            {...register("username", {
              required: "이름은 필수로 작성해주세요",
            })}
          />
        </FormStyle>
        {errors.username && (
          <ErrorMessage role="alert">{errors.username.message}</ErrorMessage>
        )}
        <FormStyle>
          <Label>비밀번호</Label>
          <Input
            type="password"
            {...register("password", {
              required: "비밀번호는 필수로 작성해주세요.",
              minLength: {
                value: 8,
                message: "비밀번호는 8자 이상이어야 합니다.",
              },
            })}
          />
        </FormStyle>
        {errors.password && (
          <ErrorMessage role="alert">{errors.password.message}</ErrorMessage>
        )}
        <Button type="submit" disabled={isSubmitting || !isDirty}>
          Sign Up
        </Button>
      </form>
      <div id="firstvisit">
        이미 계정이 있으시다면!
        <NavLink id="signup" to="/member/login">
          로그인
        </NavLink>
      </div>
    </SignUpTemplate>
  );
}

const SignUpTemplate = styled.div`
  padding: 90px 40px 0px;
  max-width: 500px;
  margin: 0 auto;
`;
const Title = styled.h1`
  font-size: 30px;
  color: var(--text-100);
  margin-bottom: 20px;
  text-align: center;
`;
const FormStyle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
const Label = styled.label`
  width: 80px;
`;
const Label01 = styled(Label)`
  width: 66px;
`;
const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 10px;
  box-sizing: border-box;
  border-radius: 6px;
  background-color: #f5f5f5;
  ::placeholder {
    color: var(--bg-300);
  }
`;
const Input01 = styled(Input)`
  max-width: 214px;
`;
const Button = styled.button`
  width: 100%;
  height: 48px;
  margin: 20px auto 0;
  box-sizing: border-box;
  border-radius: 6px;
  color: var(--bg-100);
  font-size: 16px;
  background-color: var(--primary-200);
`;
const SendButton = styled(Button)`
  margin-top: 0;
  background-color: #424874;
  color: #fff;
`;
const RemainingTime = styled.span`
  width: 50px;
  font-size: 14px;
  text-align: right;
  display: ${(props) => (props.isVerified ? "none" : "inline")};
`;
const VerifyButton = styled(Button)`
  width: 80px;
  margin: 0 0 0 10px;
  background-color: var(--primary-100);
  color: #fff;
`;
const VerificationMessage = styled.p`
  width: 11%;
  margin-left: 10px;
  font-size: 14px;
  text-align: center;
  color: green;
`;
const ErrorMessage = styled.span`
  color: red;
`;

export default SignUp;
