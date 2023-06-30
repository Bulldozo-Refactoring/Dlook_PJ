import { setUserInfo } from 'app/slices/BackUserSlice';
import { postLogin } from 'app/slices/CookieSlice';
import instance from 'app/slices/Instance';
import { checkAuthentication } from 'app/store';
import { Box, Button, Input, NavStyle, Small, StyleTitle, Wrap } from 'app/style/StyleAuth';
import jwt_decode from 'jwt-decode';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import google from 'app/assets/images/google.png';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const checkUser = checkAuthentication();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    dispatch(postLogin(data))
      .unwrap()
      .then((response) => {
        const memberName = jwt_decode(response.accessToken.split('Bearer ')[1]).sub;
        instance.get(`/users/${memberName}`).then((data) => {
          const userInfoData = {
            tier: data.data.tier,
            maxStreak: data.data.maxStreak,
            rating: data.data.rating,
            user: data.data.user,
            solvedCount: data.data.solvedCount,
          };
          dispatch(setUserInfo(userInfoData));
        });
        window.alert(memberName + '님 로그인에 성공하셨습니다.!');
        navigate('/');
      })
      .catch((error) => console.log('로그인 실패!'));
  });

  return (
    <>
      <Container>
        {checkUser ? (
          <Navigate to="/" />
        ) : (
          <Wrap>
            <StyleTitle>Login</StyleTitle>
            <form method="post" onSubmit={handleSubmit(onSubmit)}>
              <Box>
                <StyleInput
                  id="memberEmail"
                  name="memberEmail"
                  type="text"
                  placeholder="Email"
                  aria-invalid={!isDirty ? undefined : errors.memberEmail ? 'true' : 'false'}
                  {...register('memberEmail', {
                    required: '이메일은 필수 입력입니다.',
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: '이메일 형식에 맞지 않습니다.',
                    },
                    minLength: {
                      value: 5,
                      message: '5자 이상으로 적어주세요.',
                    },
                  })}
                />
                {errors.memberEmail && <Small role="alert">{errors.memberEmail.message}</Small>}
              </Box>
              <Box>
                <StyleInput
                  id="memberPw"
                  name="memberPw"
                  type="password"
                  placeholder="****************"
                  aria-invalid={!isDirty ? undefined : errors.memberPw ? 'true' : 'false'}
                  {...register('memberPw', {
                    required: '비밀번호는 필수 입력입니다.',
                    minLength: {
                      value: 8,
                      message: '8자리 이상 비밀번호를 사용하세요.',
                    },
                  })}
                />
                {errors.memberPw && <Small role="alert">{errors.memberPw.message}</Small>}
              </Box>
              <StyleButton type="submit" value="Login" disabled={isSubmitting}>
                로그인
              </StyleButton>
            </form>
            <p style={{ marginBottom: '30px' }}>
              <img src={google} alt="구글 로그인" onClick={() => {}} />
              <NavStyleR to="/members/password">비밀번호 찾기</NavStyleR>
            </p>
            <div style={{ textAlign: ' center' }}>
              Dlook이 처음이신가요?
              <NavStyle to="/members/join">회원가입</NavStyle>
            </div>
          </Wrap>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  * {
    font-weight: 500;
  }
`;
const StyleInput = styled(Input)`
  margin-bottom: 2rem;
`;

const StyleButton = styled(Button)`
  margin-top: 0;
  margin-bottom: 1rem;
`;
const NavStyleR = styled(NavStyle)`
  float: right;
`;

export default Login;
