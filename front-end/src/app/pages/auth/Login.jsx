import { postLogin } from 'app/slices/CookieSlice';
import { checkAuthentication } from 'app/store';
import jwt_decode from 'jwt-decode';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
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
            <Title>Login</Title>
            <LoginFrom method="post" onSubmit={handleSubmit(onSubmit)}>
              <Box>
                <Input
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
                <Input
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
              <Input01 type="submit" value="Login" disabled={isSubmitting} />
            </LoginFrom>
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
  color: ${({ theme }) => theme.light.t01};
  text-align: center;
`;
const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 10px;
  margin-bottom: 2rem;
  border-radius: 6px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.light.b03};
  ::placeholder {
    color: ${({ theme }) => theme.color.c01};
  }
`;
const Input01 = styled(Input)`
  color: ${({ theme }) => theme.light.b01};
  font-size: 16px;
  background-color: ${({ theme }) => theme.color.c05} !important;
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
