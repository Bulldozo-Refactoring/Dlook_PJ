import instance from 'app/slices/Instance';
import { Title } from 'app/style/GlobalStyle';
import { BtnDiv, Container, Phone, PhoneBtn, StyleLi, StyleUl } from 'app/style/StyleGarbage';
import { useCallback, useEffect, useRef, useState } from 'react';

const Garbage = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [scrollEventTriggered, setScrollEventTriggered] = useState(false);

  const containerRef = useRef(null);

  const getList = useCallback(async () => {
    setLoading(true);
    await instance.get(`boards/list?page=${page}`).then((res) => {
      const newItems = res.data.boardList;
      setItems((prevState) => [...prevState, ...newItems]);
      if (newItems.length === 0) setHasMore(false);
      setScrollEventTriggered(false); // 스크롤 이벤트 재설정
    });
    setLoading(false);
  }, [page]);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (container.scrollHeight - container.scrollTop === container.clientHeight && !loading && hasMore && !scrollEventTriggered) {
      setScrollEventTriggered(true);
      setPage((prevPage) => prevPage + 1);
    }
  }, [loading, hasMore, scrollEventTriggered]);

  useEffect(() => {
    getList();
  }, [getList]);

  useEffect(() => {
    handleScroll();
  }, [getList, handleScroll]);

  return (
    <Container>
      <section>
        <Title>쓰레기통 게시판</Title>
        <p>쓰레기통 게시판 만들다가 인성 쓰레기된 프엔 개발자</p>
      </section>
      <section>
        <Phone ref={containerRef}>
          <StyleUl>
            {items.map((item, index) => (
              <StyleLi key={index}>{item.boardNo}</StyleLi>
            ))}
          </StyleUl>
          {loading && <div>Loading...</div>}
          {!loading && !hasMore && <div>X</div>}
        </Phone>
        <BtnDiv>
          <PhoneBtn to="/garbage/write">
            <span className="tab-label"></span>
          </PhoneBtn>
        </BtnDiv>
      </section>
    </Container>
  );
};

export default Garbage;
