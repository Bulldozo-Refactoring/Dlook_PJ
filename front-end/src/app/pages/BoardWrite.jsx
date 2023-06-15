import React, { useState } from 'react';
import "app/style/BoardWrite.css"

const BoardWrite = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 게시글 작성 로직 구현
    console.log('게시글 작성:', title, content);
    // 필요에 따라 서버로 데이터를 전송하거나 다른 동작 수행 가능
  };

  

  

  return (
    <div className="post-form-container">
      <h2>전체 게시판</h2>
      <span>작성자</span> 작성자명
      <span>카테고리</span>
      <select size="2" className="category">
        <option defaultValue="free">자유게시판</option>
        <option defaultValue="qa">Q&A게시판</option>
      </select>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">글제목</label>
        <input
          type="text"
          id="title"
          defaultValue={title}
          onChange={handleTitleChange}
        />
        <label htmlFor="content"></label>
        <textarea
          id="content"
          defaultValue={content}
          onChange={handleContentChange}
        ></textarea>
        <button type="submit" className="btn-dark">
          작성하기
        </button>
        <button type="submit" className="btn-dark">
          돌아가기
        </button>
      </form>
    </div>
  );
};

export default BoardWrite;