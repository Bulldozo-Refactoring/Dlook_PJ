import { postJoin, postMail } from 'app/slices/UserSlice';
import {
  Button,
  ErrorMessage,
  FormStyle,
  Input,
  NavStyle,
  RemainingTime,
  SendButton,
  SignUpTemplate,
  StyleTitle,
  VerificationMessage,
  VerifyButton,
} from 'app/style/StyleAuth';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Join = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, isDirty, errors },
    // setError,
    clearErrors,
  } = useForm();

  const [isEmailSent, setIsEmailSent] = useState(false); // Send an email
  const [verificationCode, setVerificationCode] = useState(''); // Error message
  const [isVerified, setIsVerified] = useState(false); // Authentication code
  const [remainingTime, setRemainingTime] = useState(300); // Authentication time

  /**
   * @brief Email transmission successful
   * @detail Whether it's a success or not
   * @return setIsEmailSent(true/false)
   */
  const sendVerificationEmail = (memberEmail) => {
    dispatch(postMail({ memberEmail }))
      .then((response) => {
        setIsEmailSent(true);
        setVerificationCode(response.payload); 
        startTimer();
      })
      .catch((error) => {
        console.log('이메일 전송 실패:', error);
      });
  };

  const startTimer = () => {
    let seconds = 300;
    const timer = setInterval(() => {
      seconds--;
      setRemainingTime(seconds);
      if (seconds === 0) clearInterval(timer);
    }, 1000);
  };

  /**
   * @brief
   * @detail
   * @param
   * @return
   */
  const verifyCode = (inputCode) => {
    if (verificationCode === inputCode) {
      setIsVerified(true);
      clearErrors('verificationCode');
    } else {
      setIsVerified(false);
      alert("인증코드가 일치하지 않습니다.");
    }
  };

  const onSubmit = handleSubmit((data) => {
    dispatch(postJoin(data))
      .unwrap()
      .then((response) => navigate('/members/joinresult'));
  });

  useEffect(() => remainingTime === 0 && setIsEmailSent(false), [remainingTime]);

  return (
    <SignUpTemplate>
      <StyleTitle>Sign Up</StyleTitle>
      <p>닉네임은 백준 이름으로 적으세요.</p>
      <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: '20px' }}>
        <FormStyle>
          <label>이메일</label>
          <Input
            type="email"
            {...register('memberEmail', {
              required: '이메일은 필수로 작성해주세요.',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: '올바른 이메일 형식을 입력해주세요.',
              },
            })}
          />
          {errors.memberEmail && <ErrorMessage role="alert">{errors.memberEmail.message}</ErrorMessage>}
        </FormStyle>
        {isEmailSent ? (
          <FormStyle>
            <label style={{ width: '66px' }}>인증번호</label>
            <Input
              type="text"
              {...register('verificationCode', {
                required: '인증 번호를 적어주세요.',
              })}
              style={{ width: '65%' }}
            />
            {errors.verificationCode && <ErrorMessage role="alert">{errors.verificationCode.message}</ErrorMessage>}
            <RemainingTime>{remainingTime}초</RemainingTime>
            {isVerified ? (
              <VerificationMessage>PASS</VerificationMessage>
            ) : (
              <VerifyButton type="button" onClick={() => verifyCode(watch('verificationCode'))}>
                확인
              </VerifyButton>
            )}
          </FormStyle>
        ) : (
          <FormStyle>
            <SendButton type="button" onClick={() => sendVerificationEmail(watch('memberEmail'))}>
              전송
            </SendButton>
          </FormStyle>
        )}
        <FormStyle>
          <label>이름</label>
          <Input
            type="text"
            {...register('memberName', {
              required: '이름은 필수로 작성해주세요',
            })}
          />
          {errors.memberName && <ErrorMessage role="alert">{errors.memberName.message}</ErrorMessage>}
        </FormStyle>
        <FormStyle>
          <label>비밀번호</label>
          <Input
            type="password"
            {...register('memberPw', {
              required: '비밀번호는 필수로 작성해주세요.',
              minLength: {
                value: 8,
                message: '비밀번호는 8자 이상이어야 합니다.',
              },
            })}
          />
          {errors.memberPw && <ErrorMessage role="alert">{errors.memberPw.message}</ErrorMessage>}
        </FormStyle>
        <Button type="submit" disabled={isSubmitting || !isDirty || !isVerified}>
          Sign Up
        </Button>
      </form>
      <div id="firstvisit">
        이미 계정이 있으시다면
        <NavStyle to="/members/login">로그인</NavStyle>
      </div>
    </SignUpTemplate>
  );
};

export default Join;
