// [ ] 추후 정리 필요
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const Container = styled.div`
  padding: 80px 120px;
  min-height: 1000px;
  text-align: center;
  margin: 0 auto;
`;
const Phone = styled.div`
  position: relative;
  width: 70%;
  height: 800px;
  margin: 0 auto;
  border: 50px solid ${({ theme }) => theme.color.c01};
  border-bottom: 100px solid ${({ theme }) => theme.color.c01};
  border-radius: 40px;
`;
const StyleUl = styled.ul`
  margin: 0 auto;
  width: 100%;
  max-height: 651px;
  list-style: none;
  overflow: scroll;
`;
const StyleLi = styled.li`
  padding: 15px 10px;
  border: 1px solid ${({ theme }) => theme.color.c01};
  font-weight: 300;
`;
const PhoneBtn = styled(NavLink)`
  position: absolute;
  left: calc(50% - 35px);
  bottom: -13%;
  width: 70px;
  height: 70px;
  padding: 25px 10px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.light.b01};
  font-weight: 500;
  &:active,
  &:focus {
    background-color: ${({ theme }) => theme.light.t03};
    color: ${({ theme }) => theme.light.b01};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const RadioInput = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border: 1px solid ${({ theme }) => theme.color.c01};
`;

const RadioLabel = styled.label`
  cursor: pointer;
`;

const ErrorMessage = styled.span`
  color: red;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: ${({ theme }) => theme.light.b01};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
export { Button, Container, ErrorMessage, Form, Phone, PhoneBtn, RadioContainer, RadioInput, RadioLabel, StyleLi, StyleUl };
