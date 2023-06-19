import React, { useState } from "react";
import "app/style/BoardWrite.css";
import DropDown from "app/components/DropDown";
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
    <section className="post-form-container">
        <h2>전체 게시판</h2>
        <hr />
        <div>
          <div className="authorName">
            <Span>작성자</Span> 작성자명
          </div>
          <div className="categorySelect">
            <Span className="cate">카테고리</Span>
            <DropDown />
          </div>
        </div>
        <br />
        <br />
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title" className="boardTitle">
              <Span>글제목</Span>
            </label>
            <input
              type="text"
              id="title"
              defaultValue={title}
              onChange={handleTitleChange}
            />
            <br />
            <label htmlFor="content"></label>
            <textarea
              id="content"
              defaultValue={content}
              onChange={handleContentChange}
            ></textarea>
            <div className="buttonWb">
              <button type="submit" className="btn-dark">
                <NavLink to="">작성하기</NavLink>
              </button>
              <button type="submit" className="btn-dark">
                <NavLink to="/board">돌아가기</NavLink>
              </button>
            </div>
          </form>
        </div>
    </section>
  );
};

const Span = styled.span`
  border-style: solid;
  border: 1px solid #ccc;
  padding: 5px 40px;
`;

export default BoardWrite;
