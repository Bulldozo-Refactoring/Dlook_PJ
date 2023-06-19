import React from "react";
import "app/style/BoardDetail.css";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import CommentRun from "app/components/CommentRun";

const BoardDetail = () => {

   const doDelete = () => {
      if(window.confirm("정말 삭제하시겠습니까?")){
        alert("삭제되었습니다.");
      } else{
        alert("취소되었습니다.");
      }
   };

  return (
    <section>
      <div className="post-form-container">
        <h2>전체 게시판</h2>
        <hr />
        <div>
          <div className="authorName">
            <Span>작성자</Span> 작성자명
          </div>
          <div className="categorySelect">
            <Span>카테고리</Span>
            자유게시판
          </div>
        </div>
        <br />
        <br />
        <div>
          <form>
            <div className="boardTitle">
              <label>
                <Span>글제목</Span>
              </label>
              <p>
                대통령은 법률안의 일부에 대하여 또는 법률안을 수정하여 재의를
                요구할 수 없다.
              </p>
            </div>
            <br />
            <label></label>
            <p className="boardContent">
              모든 국민은 보건에 관하여 국가의 보호를 받는다. 국회의원과 정부는
              법률안을 제출할 수 있다. 행정각부의 설치·조직과 직무범위는 법률로
              정한다. 국회는 헌법개정안이 공고된 날로부터 60일 이내에 의결하여야
              하며, 국회의 의결은 재적의원 3분의 2 이상의 찬성을 얻어야 한다.
              모든 국민은 그 보호하는 자녀에게 적어도 초등교육과 법률이 정하는
              교육을 받게 할 의무를 진다.모든 국민은 종교의 자유를 가진다.
              대한민국은 통일을 지향하며, 자유민주적 기본질서에 입각한 평화적
              통일 정책을 수립하고 이를 추진한다. 새로운 회계연도가 개시될
              때까지 예산안이 의결되지 못한 때에는 정부는 국회에서 예산안이
              의결될 때까지 다음의 목적을 위한 경비는 전년도 예산에 준하여
              집행할 수 있다.
            </p>
            <br />
            <div className="buttonWb">
              <button type="submit" className="btn-dark" onClick={doDelete}>
                <NavLink to="/board">삭제하기</NavLink>
              </button>
              <button type="submit" className="btn-dark">
                <NavLink to="/board/1">수정하기</NavLink>
              </button>
            </div>
          </form>
        </div>
      </div>
      <CommentRun></CommentRun>
    </section>
  );
};

const Span = styled.span`
  border-style: solid;
  border: 1px solid #ccc;
  padding: 5px 40px;
`;

export default BoardDetail;
