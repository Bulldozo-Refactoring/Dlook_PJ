// [ ] 추후 정리 필요
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: calc(100% - 160px);
  min-height: 300px;
  margin: 0 auto;
  padding: 150px 10px 50px;
  text-align: center;
  section:first-child {
    width: ${({ theme }) => theme.common.col3};
  }
  section:last-child {
    width: ${({ theme }) => theme.common.col6};
  }
`;
const Phone = styled.div`
  margin: 0 auto;
  border-bottom: 0;
  border-radius: 40px 40px 0 0;
  box-shadow: 4px 15px 7px 4px #ccc;
  background: linear-gradient(to top, #6f73a3, #ecabc3);
  overflow-y: scroll;
`;
const StyleUl = styled.ul`
  margin: 30px auto 0;
  width: 85%;
  max-height: 446px;
  border-radius: 26px;
  background-color: ${({ theme }) => theme.light.b01};
  overflow: scroll;
`;
const StyleLi = styled.li`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 10px;
`;
const Img = styled.img`
  width: 10%;
`;

const BtnDiv = styled.div`
  position: relative;
  width: 100%;
  height: 70px;
  &::before {
    content: '';
    top: -23px;
    left: 0;
    width: inherit;
    height: inherit;
    position: absolute;
    box-shadow: 4px 15px 7px 4px #ccc;
    background: linear-gradient(to top, #5a66b8, #6f73a3);
    border-radius: 0 0 40px 40px;
  }
`;
const PhoneBtn = styled(NavLink)`
  position: relative;
  padding: 10px 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.c05};
  font-weight: 500;
  z-index: 10;
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

export { BtnDiv, Button, Container, ErrorMessage, Form, Img, Phone, PhoneBtn, RadioContainer, RadioInput, RadioLabel, StyleLi, StyleUl };
