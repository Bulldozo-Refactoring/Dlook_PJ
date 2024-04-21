/* eslint-disable react-hooks/exhaustive-deps */
import { getBoardDetail, setBoardCtgLabel } from 'app/slices/BoardSlice';
import instance from 'app/slices/Instance';
import { checkAuthentication, setMemberName } from 'app/store';
import Button, { BoardText, Form, StyleSection, StyleTitle, StyleUl } from 'app/style/StyleBoard';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const BoardModify = () => {
  const navigate = useNavigate();
  const { boardNo } = useParams();
  const memberName = setMemberName();
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
    instance.patch(`/boards/${boardNo}`, data).then(() => alert('수정되었습니다.'));
    navigate(`/boards/detail${boardNo}`);
  };

  return (
    <>
      {checkAuthentication ? (
        <>
          <StyleSection>
            <StyleTitle>전체 게시판 {boardNo}번 진입성공</StyleTitle>
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
                    <input
                      id="boardTitle"
                      name="boardTitle"
                      type="text"
                      defaultValue={data.boardTitle}
                      {...register('boardTitle')}
                    />
                  </span>
                </li>
              </StyleUl>
              <BoardText
                id="boardContent"
                name="boardContent"
                type="text"
                defaultValue={data.boardContent}
                {...register('boardContent')}
              ></BoardText>
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

export default BoardModify;
