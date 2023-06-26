import { setBoardNo } from 'app/slices/BoardSlice';
import instance from 'app/slices/Instance';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const BoardList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [categoryTab, setcategoryTab] = useState(2);
  const [dataList, setDataList] = useState([]);
  const [totalElements, setTotalElements] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(0);

  const getBoardList = useCallback(() => {
    const url = categoryTab === 2 ? `boards/list?page=${pageNumber}` : `boards/${categoryTab}?page=${pageNumber}`;
    instance
      .get(url)
      .then(({ data }) => {
        setDataList(data.boardList);
        setTotalElements(data.totalElements);
        setTotalPages(data.totalPages);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [pageNumber, categoryTab]);

  useEffect(() => {
    getBoardList();
  }, [getBoardList]);

  const postCreateHandler = () => navigate(`/boards/wirte`);
  const handleTitleClick = (boardNo) => dispatch(setBoardNo(boardNo));
  const handlePagenChange = (indexNumber) => setPageNumber(indexNumber);
  const handleCategoryClick = (category) => {
    setcategoryTab(category);
    setPageNumber(0);
    setDataList([]);

    let url = category === 2 ? 'list' : category;
    navigate(`/boards/${url}?page=0`);
  };

  const renderTableRows = () => {
    return dataList.map((list, index) => (
      <StyledTr key={list.boardNo}>
        <StyleTd>{pageNumber * 10 + index + 1}</StyleTd>
        <StyleTd>
          <NavLink to={`/boards/detail/${list.boardNo}`} onClick={() => handleTitleClick(list.boardNo)}>
            {list.boardTitle}
          </NavLink>
        </StyleTd>
        <StyleTd>{list.boardWriter}</StyleTd>
        <StyleTd>{list.createdTime}</StyleTd>
      </StyledTr>
    ));
  };

  const renderPaginationButtons = () => {
    return Array.from({ length: totalPages }).map((boardCtg, index) => (
      <PaginButton key={index} className={index === pageNumber ? 'active' : ''} onClick={() => handlePagenChange(index)}>
        {index + 1}
      </PaginButton>
    ));
  };

  return (
    <>
      <Board>
        <StyleP>
          전체 게시글 수 <span>{totalElements}</span>
        </StyleP>
        <Wrap>
          <StyledUl>
            <StyleLi>
              <Tab className={categoryTab === 2 ? 'active' : ''} onClick={() => handleCategoryClick(2)}>
                전체게시판
              </Tab>
            </StyleLi>
            <StyleLi>
              <Tab className={categoryTab === 0 ? 'active' : ''} onClick={() => handleCategoryClick(0)}>
                자유게시판
              </Tab>
            </StyleLi>
            <StyleLi>
              <Tab className={categoryTab === 1 ? 'active' : ''} onClick={() => handleCategoryClick(1)}>
                Q&A게시판
              </Tab>
            </StyleLi>
          </StyledUl>
          <StyleTable>
            <thead>
              <tr>
                <StyleTh>번호</StyleTh>
                <StyleThTitle>제목</StyleThTitle>
                <StyleTh>작성자</StyleTh>
                <StyleTh>등록일</StyleTh>
              </tr>
            </thead>
            <tbody>{renderTableRows()}</tbody>
          </StyleTable>
        </Wrap>
        <StyledButton onClick={postCreateHandler}>글 작성</StyledButton>
        <Pagination>{renderPaginationButtons()}</Pagination>
      </Board>
    </>
  );
};

const Board = styled.div`
  padding: 5rem 7rem 8rem;
`;
const Wrap = styled.div`
  margin-bottom: 3rem;
  box-shadow: 0px 10px 2px 5px var(--bg-300);
`;
const StyleP = styled.p`
  padding: 10px 5px;
  text-align: right;
  font-size: 1.2rem;
  font-weight: 400;
  span {
    font-size: 1.4rem;
    font-weight: 600;
    color: #ff73a5;
  }
`;
const Tab = styled.button`
  padding: 15px 10px;
  font-size: 1.1rem;
  font-weight: 700;
  width: 100%;
  &:hover {
    color: var(--accent-200);
  }
  &:focus {
    color: var(--accent-200);
    background-color: var(--primary-100);
  }
  &.active {
    color: var(--accent-200);
    background-color: var(--primary-100);
  }
`;
const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--bg-300);
`;
const StyleLi = styled.li`
  width: 33.33%;
  background-color: var(--bg-200);
`;

const StyleTable = styled.table`
  width: 100%;
`;
const StyleTh = styled.th`
  padding: 10px;
  border-right: 1px solid var(--bg-100);
  background-color: var(--primary-200);
  font-weight: 600;
  color: var(--bg-100);
  &:last-child {
    border: none;
  }
}
`;
const StyleThTitle = styled(StyleTh)`
  width: 60%;
`;
const StyledTr = styled.tr`
  * {
    font-weight: 500;
  }
  &:hover *,
  &:focus *,
  &.active * {
    color: var(--primary-200);
    background-color: var(--text-200);
    cursor: pointer;
  }
`;
const StyleTd = styled.td`
  padding: 8px;
  text-align: center;
  border-right: 1px solid var(--bg-300);
  border-bottom: 1px solid var(--bg-300);

  &:last-child {
    border-right: none;
  }
`;
const StyledButton = styled.button`
  display: block;
  margin-left: auto;
  padding: 0.7rem 1.5rem;
  border-radius: 10px;
  background-color: var(--primary-200);
  font-size: 1rem;
  font-weight: 500;
  &:hover {
    color: var(--bg-100);
    background-color: var(--text-200);
  }
`;
const Pagination = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
const PaginButton = styled.button`
  padding: 0.7rem;
  margin: 0 5px;
  border-radius: 5px;
  background-color: var(--bg-200);
  font-size: 1rem;
  font-weight: 500;
  &:hover,
  &.active {
    color: var(--bg-100);
    background-color: var(--text-200);
  }
`;
export default BoardList;
