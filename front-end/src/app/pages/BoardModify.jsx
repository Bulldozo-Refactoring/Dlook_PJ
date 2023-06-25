import instance from 'app/slices/Instance';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

//  TODO 추가필요 - 흠 response.data가 없으면 대충 로딩
// if (!boardData) return <div>Loading...</div>;

const BoardModify = () => {
  const navigate = useNavigate();
  const { boardNo } = useSelector((state) => state.board);
  const [data, setdata] = useState([]);
  const [board, setBoard] = useState({
    idx: 0,
    title: '',
    createdBy: '',
    contents: '',
  });

  const getBoardDetail = useCallback(async () => {
    try {
      const { data } = await instance.get(`/boards/${boardNo}`);

      console.log(data);
      setdata(data);
    } catch (err) {
      console.error(err);
    }
  }, [boardNo]);

  const updateBoard = useCallback(async () => {
    await instance.patch(`/boards/${boardNo}`, board).then((res) => {
      alert('수정되었습니다.');
      navigate(`/boards/detail${boardNo}`);
    });
  });

  useEffect(() => {
    getBoardDetail();
  }, []);

  const getBoardCtgLabel = (boardCtg) => {
    if (boardCtg === 0) return '전체게시판';
    else if (boardCtg === 1) return '자유게시판';
    else return 'Q&A게시판';
  };

  return (
    <>
      <div>{boardNo}번 진입성공</div>
      <section>
        <H1>전체 게시판</H1>
        <DivFlex>
          <div>
            <Span>작성자</Span>
            {data.detailWriter}
          </div>
          <div>
            <Span>카테고리</Span>
            <span>{getBoardCtgLabel(data.detailboardCtg)}</span>
          </div>
        </DivFlex>
        <BoardContent data={data} />
      </section>
    </>
  );
};

const H1 = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
  color: #333;
  font-size: 24px;
  text-align: center;
`;
const Span = styled.span`
  border-style: solid;
  border: 1px solid #ccc;
  padding: 5px 40px;
  margin-right: 5px;
`;
const BoardContent = styled.p`
  padding: 10px;
  margin-bottom: 10px;
`;

const DivFlex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 25px;
`;

export default BoardModify;
