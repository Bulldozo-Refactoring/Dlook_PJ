import React, { useEffect, useRef, useState } from "react";
import "./BoardWrite.css";

function BoardWrite() {
  const [Title, setTitle] = useState(""); // 글 타이틀 저장
  const [Text, setText] = useState(""); // 내용 저장

  return (
    <div>
      <select size="2" className="category">
        <option selected value="free">자유게시판</option>
        <option value="qa">Q&A게시판</option>
      </select>
      {/* 카테고리 선택란 */}
      {/* 제목 작성란 */}
      <div className="title">
        <h4>글제목</h4>
        안녕하세요
      </div>
      {/* 내용 작성란  */}

      {/* 작성하기 돌아가기란 */}
    </div>
  );
}

export default BoardWrite;



