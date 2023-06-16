import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

function Garbage() {
  return (
    <Conainter>
      <H1>Garbage Collection</H1>
      <Phone>
        <UlList>
          {dummyList.map((it, index) => {
            return <Lilist key={index}>{it.id}</Lilist>;
          })}
        </UlList>
        <PhoneBtn to="/garbage/write">작성</PhoneBtn>
      </Phone>
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
  height: 800px;
  margin: 0 auto;
  border: 50px solid var(--bg-300);
  border-bottom: 100px solid var(--bg-300);
  border-radius: 40px;
`;
const UlList = styled.ul`
  margin: 0 auto;
  width: 100%;
  max-height: 651px;
  list-style: none;
  overflow: scroll;
`;
const Lilist = styled.li`
  padding: 15px 10px;
  border: 1px solid var(--bg-300);
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
  background-color: var(--bg-100);
  font-weight: 500;
  &:active,
  &:focus {
    background-color: var(--primary-200);
    color: var(--bg-100);
  }
`;
const dummyList = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

export default Garbage;
