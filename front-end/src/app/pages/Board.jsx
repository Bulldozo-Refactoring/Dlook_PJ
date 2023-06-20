import React from "react";
import { useState } from "react";
import "app/style/Tab.css"
import FreeBoard from "app/components/Board/FreeBoard";
import QaBoard from "app/components/Board/QaBoard";
import "app/style/style.css"

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
          자유게시판
        </button>
        
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Q&A게시판
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <FreeBoard />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <QaBoard />
        </div>
      </div>
    </div>
  );
}

export default Tabs;
