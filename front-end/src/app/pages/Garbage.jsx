import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

function Garbage() {
  return (
    <Conainter>
      <H1>Garbage Collection</H1>
      <Phone></Phone>
      <PhoneBtn>작성</PhoneBtn>
    </Conainter>
  );
}

const Conainter = styled.div`
  padding: 80px 120px;
  min-height: 1000px;
  text-align: center;
`;
const H1 = styled.h1`
  margin-bottom: 1rem;
  font-size: 50px;
  font-weight: 700;
`;
const Phone = styled.div`
  position: relative;
  width: 70%;
  height: 700px;
  margin: 0 auto;
  border: 50px solid var(--bg-300);
  border-bottom: 100px solid var(--bg-300);
  border-radius: 40px;
`;
const PhoneBtn = styled(NavLink)`
  position: absolute;
  left: calc(50% - 35px);
  bottom: 8px;
  width: 70px;
  height: 70px;
  padding: 25px 10px;
  border-radius: 50%;
  background-color: var(--bg-100);
  font-weight: 500;
  &:active,
  &:focus {
    background-color: var(--primary-200);
    color: var(--bg-100);
  }
`;
export default Garbage;
