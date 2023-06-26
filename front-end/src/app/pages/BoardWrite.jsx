/* eslint-disable react-hooks/exhaustive-deps */
import { getBoardCreate } from 'app/slices/BoardSlice';
import { checkAuthentication, setMemberName } from 'app/store';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

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
      })
      .catch((error) => console.log('회원가입 실패!'));
  });

  return (
    <>
      {checkAuthentication ? (
        <>
          <StyleSection>
            <StyleH1>전체 게시판 작성</StyleH1>
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
              <BoardContent id="boardContent" name="boardContent" type="text" {...register('boardContent')}></BoardContent>
              <Button color={['var(--primary-200)', 'var(--text-100)', '#64748B']} type="submit" title="등록하기"></Button>
            </Form>
            <Button
              color={['var(--primary-100)', 'var(--bg-200)', 'var(--primary-100)']}
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
    border-left: 2px solid var(--primary-100);
    background-color: var(--bg-200);
  }
  span:last-child {
    width: calc(100% - 140px);
    padding: 10px 2rem 9px;
    border-bottom: 2px solid var(--bg-200);
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
  border: 2px solid var(--bg-200);
  font-size: 1rem;
  font-weight: 400;
`;
const Form = styled.form`
  button {
    float: right;
  }
`;
const StyledSelect = styled.select`
  display: inline-block;
  width: calc(100% - 140px);
  padding: 9px 2rem;
  border: 2px solid var(--bg-200);
  font-size: 1.3rem;
`;
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
    box-shadow: 0 0 0 1px var(--accent-200);
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

export default BoardWrite;
