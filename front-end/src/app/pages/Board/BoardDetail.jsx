import Comment from 'app/components/Comment';
import { getBoardDetail, setBoardCtgLabel, setBoardWriter } from 'app/slices/BoardSlice';
import instance from 'app/slices/Instance';
import { checkAuthentication, setMemberName } from 'app/store';
import Button, { BoardContent, BtnDiv, StyleSection, StyleTitle, StyleUl } from 'app/style/StyleBoard';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

//  TODO 추가필요 - 흠 response.data가 없으면 대충 로딩
// if (!boardData) return <div>Loading...</div>;

const BoardDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { boardNo } = useParams();
  const memberName = setMemberName();
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(setBoardWriter(data.boardWriter));
    getBoardDetail('detail', boardNo, navigate, setData);
  }, [boardNo, data.boardWriter, navigate, memberName, dispatch]);

  const setBoardCtg = setBoardCtgLabel(data.boardCtg);

  const handleDelete = async () => {
    if (window.confirm('게시글을 삭제하시겠습니까?')) {
      const accessToken = localStorage.getItem('accessToken');
      await instance.delete(`/boards/${boardNo}`, { headers: { memberName: memberName, Authorization: `Bearer ${accessToken}` } }).then(() => {
        alert('삭제되었습니다.');
        navigate('/boards/list?page=0');
      });
    }
  };

  return (
    <>
      <StyleSection>
        <StyleTitle>전체 게시판 {boardNo}번 진입성공</StyleTitle>
        <StyleUl>
          <li>
            <span>작성자</span>
            <span>{data.boardWriter}</span>
          </li>
          <li>
            <span>카테고리</span>
            <span>{setBoardCtg}</span>
          </li>
          <li>
            <span>제목</span>
            <span>{data.boardTitle}</span>
          </li>
        </StyleUl>

        <BoardContent>{data.boardContent}</BoardContent>
        <BtnDiv>
          {/* [ ]  해당하는 유저인지 확인 필요 */}
          {checkAuthentication && memberName === data.boardWriter ? (
            <>
              <Button
                color={[({ theme }) => theme.light.b03, ({ theme }) => theme.light.t02, ({ theme }) => theme.light.t02]}
                onClick={handleDelete}
                title="삭제하기"
              ></Button>
              <Button
                color={[({ theme }) => theme.color.c05, ({ theme }) => theme.light.t01, ({ theme }) => theme.light.t02]}
                onClick={() => navigate(`/boards/update/${boardNo}`)}
                title="수정하기"
              ></Button>
            </>
          ) : (
            ''
          )}
          <Button
            color={[({ theme }) => theme.light.t03, ({ theme }) => theme.light.b02, ({ theme }) => theme.light.t03]}
            onClick={() => navigate('/boards/list?page=1')}
            title="목록가기"
          ></Button>
        </BtnDiv>

        <Comment></Comment>
      </StyleSection>
    </>
  );
};

export default BoardDetail;
