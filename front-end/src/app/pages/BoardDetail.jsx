import CommentRun from 'app/components/Board01/CommentRun';
import instance from 'app/slices/Instance';
import { checkAuthentication } from 'app/store';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

//  TODO 추가필요 - 흠 response.data가 없으면 대충 로딩
// if (!boardData) return <div>Loading...</div>;

const BoardDetail = () => {
  const navigate = useNavigate();
  let { boardNo } = useParams();
  const [data, setData] = useState([]);

  const getBoardDetail = useCallback(() => {
    instance
      .get(`/boards/detail/${boardNo}`)
      .then(({ data }) => {
        if (!data) {
          window.alert('잘못된 접근 입니다.');
          return navigate('/boards/list?page=0');
        }
        setData(data);
      })
      .catch((error) => console.log(error));
  }, [boardNo]);

  useEffect(() => {
    getBoardDetail();
  }, [getBoardDetail]);

  const getBoardCtgLabel = (boardCtg) => {
    if (boardCtg === 'list') return '전체게시판';
    else if (boardCtg === 0) return '자유게시판';
    else return 'Q&A게시판';
  };
  const handleUpdate = () => navigate(`/boards/modify/${boardNo}`);
  const handleDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      console.log('삭제되었습니다.');
    } else {
      console.log('취소되었습니다.');
    }
  };

  console.log(data);

  return (
    <>
      <StyleSection>
        <StyleH1>전체 게시판 {boardNo}번 진입성공</StyleH1>
        <StyleUl>
          <li>
            <span>작성자</span>
            {data.boardWriter}
          </li>
          <li>
            <span>카테고리</span>
            {getBoardCtgLabel(data.boardCtg)}
          </li>
          <li>
            <span>제목</span>
            {data.detailTitle}
          </li>
        </StyleUl>

        <div>
          <br />
          <label></label>
          <BoardContent>{data.boardContent}</BoardContent>
          <br />
          {/* [ ] 난리났다 */}
          {checkAuthentication ? (
            <>
              <button onClick={handleDelete}>삭제하기</button>
              <button onClick={handleUpdate}>수정하기</button>
            </>
          ) : (
            ''
          )}
        </div>
        <CommentRun></CommentRun>
      </StyleSection>
    </>
  );
};

const StyleSection = styled.section`
  padding: 50px 80px;
`;
const StyleH1 = styled.h1`
  margin-bottom: 2rem;
  font-size: 2rem;
  text-align: center;
  font-weight: 700;
`;
const StyleUl = styled.ul`
  display: grid;
  gap: 20px;
  grid-auto-rows: minmax(40px, auto);
  * {
    font-size: 1.1rem;
    font-weight: 400;
  }
  li:nth-child(1) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
  li:nth-child(2) {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }
  li:nth-child(3) {
    grid-column: 1 / 4;
    grid-row: 2 / 3;
  }
  li {
    line-height: 40px;
  }
  span {
    margin-right: 1rem;
    padding: 7.75px 2rem;
    background-color: var(--bg-200);
    font-size: 1.3rem;
  }
`;

const BoardContent = styled.p`
  padding: 10px;
  margin-bottom: 10px;
`;

export default BoardDetail;
