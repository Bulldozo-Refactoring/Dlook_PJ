import { Table } from 'app/components/Table';
import instance from 'app/slices/Instance';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Board, Wrap, StyleP, Tab, StyledUl, StyleLi, StyledButton, Pagination, PaginButton } from 'app/style/StyleBoard';

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

export default BoardList;
