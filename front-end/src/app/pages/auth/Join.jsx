import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import { join } from "app/slices/membersSlice";

function Join() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
    setError,
    clearErrors,
  } = useForm();

  const [isEmailSent, setIsEmailSent] = useState(false); // Send an email
  const [verificationCode, setVerificationCode] = useState(""); // Error message
  const [isVerified, setIsVerified] = useState(false); // Authentication code
  const [remainingTime, setRemainingTime] = useState(60); // Authentication time

  const sendVerificationEmail = () => {
    // 이메일 전송 로직 작성 - 성공적으로 이메일을 전송했다면 setIsEmailSent(true)로 상태 변경
    setIsEmailSent(true);
    setVerificationCode({ value: "", isValid: false }); // verificationCode 초기화
    startTimer();
  };

  const startTimer = () => {
    let seconds = 300;
    const timer = setInterval(() => {
      seconds--;
      setRemainingTime(seconds);
      if (seconds === 0) clearInterval(timer);
    }, 1000);
  };

  const verifyCode = () => {
    // 인증 코드 확인 로직 작성 - 인증 코드가 맞다면 setIsVerified(true)로 상태 변경
    setIsVerified(true);
    clearErrors("verificationCode");
  };

  const onSubmit = handleSubmit((data) => {
    dispatch(join(data))
      .unwrap()
      .then((response) => navigate("/members/joinresult"))
      .catch((error) => console.log("회원가입 실패!"));
  });

  useEffect(() => {
    if (remainingTime === 0) setIsEmailSent(false);
  }, [remainingTime]);

  return (
    <SignUpTemplate>
      <Title>Sign Up</Title>
      <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: "20px" }}>
        <FormStyle>
          <Label>이메일</Label>
          <Input
            type="email"
            {...register("memberEmail", {
              required: "이메일은 필수로 작성해주세요.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "올바른 이메일 형식을 입력해주세요.",
              },
            })}
          />
          {errors.memberEmail && (
            <ErrorMessage role="alert">
              {errors.memberEmail.message}
            </ErrorMessage>
          )}
        </FormStyle>
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
            {...register("memberName", {
              required: "이름은 필수로 작성해주세요",
            })}
          />
          {errors.memberName && (
            <ErrorMessage role="alert">
              {errors.memberName.message}
            </ErrorMessage>
          )}
        </FormStyle>
        <FormStyle>
          <Label>비밀번호</Label>
          <Input
            type="password"
            {...register("memberPw", {
              required: "비밀번호는 필수로 작성해주세요.",
              minLength: {
                value: 8,
                message: "비밀번호는 8자 이상이어야 합니다.",
              },
            })}
          />
          {errors.memberPw && (
            <ErrorMessage role="alert">{errors.memberPw.message}</ErrorMessage>
          )}
        </FormStyle>
        <Button type="submit" disabled={isSubmitting || !isDirty}>
          Sign Up
        </Button>
      </form>
      <div id="firstvisit">
        이미 계정이 있으시다면
        <NavStyle to="/members/login">로그인</NavStyle>
      </div>
    </SignUpTemplate>
  );
}

const SignUpTemplate = styled.div`
  padding: 90px 40px 0px;
  max-width: 500px;
  margin: 0 auto;
  * {
    font-weight: 500;
    text-align: center;
  }
`;
const Title = styled.h1`
  font-size: 30px;
  color: var(--text-100);
  margin-bottom: 20px;
`;
const FormStyle = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 1.8rem;
`;
const Label = styled.label`
  text-align: left;
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
  background-color: var(--bg-200);
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
  background-color: var(--primary-200);
  color: var(--bg-100);
  font-size: 16px;
`;
const SendButton = styled(Button)`
  margin-top: 0;
  background-color: var(--primary-100);
  color: var(--bg-100);
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
  color: var(--bg-100);
`;
const VerificationMessage = styled.p`
  width: 11%;
  margin-left: 10px;
  font-size: 14px;
  color: green;
`;
const ErrorMessage = styled.span`
  position: absolute;
  bottom: -59%;
  left: 16%;
  color: red;
`;
const NavStyle = styled(NavLink)`
  margin-left: 10px;
  color: #6a24fe;
`;
export default Join;
