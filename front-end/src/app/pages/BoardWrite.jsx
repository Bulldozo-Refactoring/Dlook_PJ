import React, { useState } from "react";
import DropDown from "app/components/Board/DropDown";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";


const BoardWrite = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");


  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 게시글 작성 로직 구현
    console.log("게시글 작성:", title, content);
    // 필요에 따라 서버로 데이터를 전송하거나 다른 동작 수행 가능
  };

  return (
    <Section>
        <H2>전체 게시판</H2>
        <hr />
        <DivFlex>
          <div>
            <Span>작성자</Span> 작성자명
          </div>
          <div>
            <Span>카테고리</Span>
            <DropDown />
          </div>
        </DivFlex>
        <br />
        <br />
        <Form onSubmit={handleSubmit}>
          <div>
            <Label>
              <Span>글제목</Span>
            </Label>
            <Input
              type="text"
              id="title"
              defaultValue={title}
              onChange={handleTitleChange}
            />
          </div>
          <br />
          <Label></Label>
          <TextArea
            id="content"
            defaultValue={content}
            onChange={handleContentChange}
          ></TextArea>
          <DivButton>
            <Button type="submit">
              <NavLink to="">작성하기</NavLink>
            </Button>
            <Button type="submit">
              <NavLink to="/board">돌아가기</NavLink>
            </Button>
          </DivButton>
        </Form>
    </Section>
  );
};

const Span = styled.span`
  border-style: solid;
  border: 1px solid #ccc;
  padding: 5px 40px;
`;

const Section = styled.section`
  max-width: 90%;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
`;

const H2 = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
  color: #333;
  font-size: 24px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  color: #555;
`;

const Input = styled.input`
  margin-bottom: 10px;
  border: 1px solid #968d8d;
  width: 500px;
  height: 33px;
  margin-left: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 400px;
`;

const Button = styled.button`
  padding: 10px 15px;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  transition: background-color 0.3s;
  margin-right: 10px;
  background: #555;
  &:hover,
  &:focus {
    background: #373737;
    border-color: #373737;
    color: #fff;
  }
`;

const DivFlex = styled.div`
  display: flex;
  justify-content: space-between;

`;

const DivButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default BoardWrite;
