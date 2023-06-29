// [ ] 추후 정리 필요
import { Title } from 'app/style/GlobalStyle';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const ForgotContainer = styled.div`
  padding: 100px 10px;
  text-align: center;
  * {
    font-weight: 500;
  }
`;
const SignUpTemplate = styled.div`
  padding: 90px 40px 0px;
  max-width: 500px;
  margin: 0 auto;
  * {
    font-weight: 500;
    text-align: center;
  }
  label {
    text-align: left;
    width: 80px;
  }
`;
const Wrap = styled.div`
  display: inline-block;
  padding: 90px 40px 0;
  width: 400px;
  box-sizing: border-box;
`;
const Box = styled.div`
  position: relative;
`;
const StyleTitle = styled(Title)`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.light.t01};
  text-align: center;
`;
const FormStyle = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 1.8rem;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 10px;
  box-sizing: border-box;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.light.b03};
  ::placeholder {
    color: ${({ theme }) => theme.light.c01};
  }
`;
const Button = styled.button`
  width: 100%;
  height: 48px;
  margin: 20px auto 0;
  box-sizing: border-box;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.color.c04};
  color: ${({ theme }) => theme.light.b01};
  font-size: 16px;
`;
const SendButton = styled(Button)`
  margin-top: 0;
  background-color: ${({ theme }) => theme.light.t03};
  color: ${({ theme }) => theme.light.b01};
`;
const VerifyButton = styled(Button)`
  width: 80px;
  margin: 0 0 0 10px;
  background-color: ${({ theme }) => theme.light.t03};
  color: ${({ theme }) => theme.light.b01};
`;
const Small = styled.small`
  position: absolute;
  left: 5px;
  bottom: 5px;
  color: red;
`;
const RemainingTime = styled.span`
  width: 50px;
  font-size: 14px;
  text-align: right;
  display: ${(props) => (props.isVerified ? 'none' : 'inline')};
`;
const ErrorMessage = styled.span`
  position: absolute;
  bottom: -59%;
  left: 16%;
  color: red;
`;
const VerificationMessage = styled.p`
  width: 11%;
  margin-left: 10px;
  font-size: 14px;
  color: green;
`;
const NavStyle = styled(NavLink)`
  margin-left: 10px;
  color: #6a24fe;
`;
const NavBack = styled(NavStyle)`
  text-decoration: underline;
  color: ${({ theme }) => theme.color.c05};
`;
export {
  Box,
  Button,
  ErrorMessage,
  ForgotContainer,
  Form,
  FormStyle,
  Input,
  NavBack,
  NavStyle,
  RemainingTime,
  SendButton,
  SignUpTemplate,
  Small,
  StyleTitle,
  VerificationMessage,
  VerifyButton,
  Wrap,
};
