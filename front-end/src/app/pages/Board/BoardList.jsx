import { Table } from 'app/components/Board/Table';
import instance from 'app/slices/Instance';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const BoardList = () => {
  const navigate = useNavigate();
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

  const handlePagenChange = (indexNumber) => setPageNumber(indexNumber);
  const handleCategoryClick = (category) => {
    setcategoryTab(category);
    setPageNumber(0);
    setDataList([]);
    let url = category === 2 ? 'list' : category;
    navigate(`/boards/${url}?page=0`);
  };

  const modifiedDataList = dataList.map((list) => {
    const { boardNo, boardTitle, boardWriter, createdTime } = list;
    return {
      no: boardNo,
      title: boardTitle,
      boardWriter,
      createdTime,
    };
  });

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
          {Table(['번호', '제목', '작성자', '등록일'], modifiedDataList, '/boards/detail', pageNumber)}
        </Wrap>
        <StyledButton onClick={() => navigate(`/boards/write`)}>글 작성</StyledButton>
        <Pagination>{renderPaginationButtons()}</Pagination>
      </Board>
    </>
  );
};

const Board = styled.div`
  max-width: ${({ theme }) => theme.common.col9};
  margin: 0 auto;
`;
const Wrap = styled.div`
  margin-bottom: 3rem;
  box-shadow: 0px 10px 2px 5px ${({ theme }) => theme.color.c01};
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
    color: ${({ theme }) => theme.color.c08};
  }
  &:focus {
    color: ${({ theme }) => theme.color.c07};
    background-color: ${({ theme }) => theme.light.t03};
  }
  &.active {
    color: ${({ theme }) => theme.color.c07};
    background-color: ${({ theme }) => theme.light.t03};
  }
`;
const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.color.c01};
`;
const StyleLi = styled.li`
  width: 33.33%;
  background-color: ${({ theme }) => theme.light.b03};
`;
const StyledButton = styled.button`
  display: block;
  margin-left: auto;
  padding: 0.7rem 1.5rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.c05};
  font-size: 1rem;
  font-weight: 500;
  &:hover {
    color: ${({ theme }) => theme.light.b01};
    background-color: ${({ theme }) => theme.light.t02};
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
  background-color: ${({ theme }) => theme.light.b02};
  font-size: 1rem;
  font-weight: 500;
  &:hover,
  &.active {
    color: ${({ theme }) => theme.light.b01};
    background-color: ${({ theme }) => theme.light.t02};
  }
`;
export default BoardList;
