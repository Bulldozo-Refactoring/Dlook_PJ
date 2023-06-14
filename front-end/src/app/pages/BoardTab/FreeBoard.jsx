import React from "react";
import List from "app/components/List";
import { useState } from "react";

function FreeBoard() {
  return (
    <section className="notice">
      <div className="page-title">
        <div className="container">
          <h3>자유게시판</h3>
        </div>
      </div>

      <List />

      {/* -- board seach area -- */}
      <div id="board-search">
        <div className="container">
          <div className="search-window">
            <form action="">
              <div className="search-wrap">
                <label for="search" className="blind">
                  자유게시판 내용 검색
                </label>
                <input
                  id="search"
                  type="search"
                  name=""
                  placeholder="검색어를 입력해주세요."
                  value=""
                />
                <button type="submit" className="btn btn-dark">
                  검색
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FreeBoard;