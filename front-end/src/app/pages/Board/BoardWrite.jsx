/* eslint-disable react-hooks/exhaustive-deps */
import { getBoardCreate } from 'app/slices/BoardSlice';
import { checkAuthentication, setMemberName } from 'app/store';
import Button, { BoardText, Form, StyleSection, StyleTitle, StyleUl, StyledSelect } from 'app/style/StyleBoard';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const BoardWrite = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const memberName = useSelector((state) => state.cookie.memberName);
  const memberName = setMemberName();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (!checkAuthentication) return navigate('/boards/list?page=0');
  }, [checkAuthentication]);

  const onSubmit = handleSubmit((data) => {
    dispatch(getBoardCreate(data))
      .unwrap()
      .then((response) => {
        window.alert('등록 성공!');
        navigate(`/boards/list?page=0`);
      });
  });

  return (
    <>
      {checkAuthentication ? (
        <>
          <StyleSection>
            <StyleTitle>전체 게시판 작성</StyleTitle>
            <Form method="update" onSubmit={handleSubmit(onSubmit)}>
              <StyleUl>
                <li>
                  <span>작성자</span>
                  <span>
                    <input
                      id="boardWriter"
                      name="boardWriter"
                      type="text"
                      defaultValue={memberName}
                      {...register('boardWriter')}
                      readOnly
                    />
                  </span>
                </li>
                <li>
                  <span>카테고리</span>
                  <StyledSelect id="boardCtg" name="boardCtg" {...register('boardCtg')}>
                    <option value="0">자유게시판</option>
                    <option value="1">Q&A게시판</option>
                  </StyledSelect>
                </li>
                <li>
                  <span>제목</span>
                  <span>
                    <input id="boardTitle" name="boardTitle" type="text" {...register('boardTitle')} />
                  </span>
                </li>
              </StyleUl>
              <BoardText id="boardContent" name="boardContent" type="text" {...register('boardContent')}></BoardText>
              <Button
                color={[({ theme }) => theme.color.c05, ({ theme }) => theme.light.t01, ({ theme }) => theme.light.t02]}
                type="submit"
                title="등록하기"
              ></Button>
            </Form>
            <Button
              color={[({ theme }) => theme.light.t03, ({ theme }) => theme.light.b02, ({ theme }) => theme.light.t03]}
              type="button"
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

export default BoardWrite;
