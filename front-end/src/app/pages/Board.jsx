import React from "react";
// import List from 'app/components/List';
import { useState } from "react";
import "./BoardTab/Tab.css";
import NoticeBoard from "./BoardTab/NoticeBoard";
import FreeBoard from "./BoardTab/FreeBoard";
import QaBoard from "./BoardTab/QaBoard";
import "../style/style.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          공지사항
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          자유게시판
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Q&A게시판
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          {/* <h2>Content 1</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p> */}
          <NoticeBoard />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <FreeBoard />
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <QaBoard />
        </div>
      </div>
    </div>
  );
}

export default Tabs;
