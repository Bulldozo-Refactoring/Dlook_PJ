import React, { useEffect, useRef, useState } from "react";


function BoardWrite() {
  const [Title, setTitle] = useState(""); // 글 타이틀 저장
  const [Text, setText] = useState(""); // 내용 저장

  return (
    <div>
      {/* 카테고리 선택란 */}
      {/* 제목 작성란 */}
      <div className="title">
        <p>제목</p>
        
        안녕하세요
      </div>
       {/* 내용 작성란  */}

       {/* 작성하기 돌아가기란 */}
    </div>
  );
}

export default BoardWrite;



