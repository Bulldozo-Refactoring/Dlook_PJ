/* eslint-disable react-hooks/exhaustive-deps */
import { getBoardDetail, setBoardCtgLabel } from 'app/slices/BoardSlice';
import instance from 'app/slices/Instance';
import { checkAuthentication, setMemberName } from 'app/store';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

const BoardModify = () => {
  const navigate = useNavigate();
  const { boardNo } = useParams();
  const memberName = setMemberName();
  // const memberName = useSelector((state) => state.cookie.memberName);
  const boardWriter = useSelector((state) => state.board.boardWriter);
  const [data, setData] = useState([]);
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (checkAuthentication && memberName === boardWriter) getBoardDetail('detail', boardNo, navigate, setData);
    else navigate('/boards/list?page=0');
  }, [checkAuthentication, memberName, boardWriter, boardNo, navigate]);

  useEffect(() => {
    setValue('boardWriter', data.boardWriter);
    setValue('boardTitle', data.boardTitle);
    setValue('boardContent', data.boardContent);
  }, [data, setValue]);

  const setBoardCtg = setBoardCtgLabel(data.boardCtg);
  // [ ] 오류 수정 필요 - 확인 누르면 status값이 undefined라서 이동이 안됨
  const handleUpdate = (data) => {
    instance.patch(`/boards/${boardNo}`, data).then(() => {
      alert('수정되었습니다.');
    });
    navigate(`/boards/detail${boardNo}`);
  };

  return (
    <>
      {checkAuthentication ? (
        <>
          <StyleSection>
            <StyleH1>전체 게시판 {boardNo}번 진입성공</StyleH1>
            <Form method="update" onSubmit={handleSubmit(handleUpdate)}>
              <StyleUl>
                <li>
                  <span>작성자</span>
                  <span>
                    <input id="boardWriter" name="boardWriter" type="text" defaultValue={data.boardWriter} readOnly />
                  </span>
                </li>
                <li>
                  <span>카테고리</span>
                  <span>{setBoardCtg}</span>
                </li>
                <li>
                  <span>제목</span>
                  <span>
                    <input id="boardTitle" name="boardTitle" type="text" defaultValue={data.boardTitle} {...register('boardTitle')} />
                  </span>
                </li>
              </StyleUl>
              <BoardContent
                id="boardContent"
                name="boardContent"
                type="text"
                defaultValue={data.boardContent}
                {...register('boardContent')}
              ></BoardContent>
              {/* <Button color={['#F5F5FF', '#64748B', '#64748B']} onClick={() => handleDelete()} title="삭제하기"></Button> */}
              <Button
                color={[({ theme }) => theme.color.c05, ({ theme }) => theme.light.t01, ({ theme }) => theme.light.t02]}
                onClick={handleUpdate}
                type="submit"
                title="수정하기"
              ></Button>
            </Form>
            <Button
              color={[({ theme }) => theme.light.t03, ({ theme }) => theme.light.b02, ({ theme }) => theme.light.t03]}
              onClick={() => navigate('/boards/list?page=1')}
              title="목록가기"
            ></Button>
          </StyleSection>
        </>
      ) : (
        <div>잘못된 접근</div>
      )}
    </>
  );
};

const StyleSection = styled.section`
  padding: 50px 80px 100px;
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
  box-sizing: border-box;
  margin-bottom: 2rem;
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
    line-height: 1.6rem;
  }
  span {
    display: inline-block;
    padding: 6px 2rem;
    font-size: 1.3rem;
  }
  span:first-child {
    padding: 10px 2rem;
    border-left: 2px solid ${({ theme }) => theme.light.t03};
    background-color: ${({ theme }) => theme.light.b02};
  }
  span:last-child {
    width: calc(100% - 140px);
    padding: 10px 2rem 9px;
    border-bottom: 2px solid ${({ theme }) => theme.light.b02};
  }
  li:nth-child(3) span:last-child {
    width: calc(100% - 120px);
  }
  li:nth-child(3) span:first-child {
    width: 120px;
  }
`;
const BoardContent = styled.textarea`
  width: 100%;
  min-height: 30rem;
  padding: 1rem;
  margin-bottom: 10px;
  border: 2px solid ${({ theme }) => theme.light.b02};
  font-size: 1rem;
  font-weight: 400;
`;
const Form = styled.form`
  button {
    float: right;
  }
`;
// const BtnDiv = styled.div`
//   display: grid;
//   grid-auto-column: minmax(40px, 40px);
//   margin-bottom: 3rem;
//   button:nth-child(1) {
//     grid-column: 1 / 2;
//     grid-row: 1 / 2;
//   }
//   button:nth-child(2) {
//     grid-column: 29/30;
//     grid-row: 1 / 2;
//   }
//   button:nth-child(3) {
//     grid-column: 15 / 16;
//     grid-row: 1 / 2;
//   }
// `;
const StyleButton = styled.button`
  padding: 10px;
  background-color: ${(props) => props.color[0]};
  color: ${(props) => props.color[1]};
  box-shadow: 0 0 0 1px ${(props) => props.color[2]};

  border-radius: 5px;
  font-size: 1rem;
  font-weight: 400;
  &:hover,
  &:active,
  &:focus {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.color.c07};
  }
`;
// [ ] styled.component 전역으로 옮겨야함
const Button = ({ color, onClick, title }) => {
  return (
    <StyleButton color={color} onClick={onClick}>
      {title}
    </StyleButton>
  );
};

export default BoardModify;
