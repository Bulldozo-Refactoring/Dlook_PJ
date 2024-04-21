import icon01 from 'app/assets/images/icon01.png';
import { default as icon02, default as icon03 } from 'app/assets/images/icon02.png';
import instance from 'app/slices/Instance';
import { Title } from 'app/style/GlobalStyle';
import { BtnDiv, Container, Img, Phone, PhoneBtn, StyleLi, StyleUl } from 'app/style/StyleGarbage';
import { useCallback, useEffect, useRef, useState } from 'react';

const setGarbageContent = (items) => {
  switch (items) {
    case 0:
      return (
        <>
          <Img src={icon01} alt="https://www.flaticon.com/kr/free-icons/" />
          <span>놀랐어요.</span>
        </>
      );
    case 1:
      return (
        <>
          <Img src={icon02} alt="https://www.flaticon.com/kr/free-icons/" />
          <span>기뻐요.</span>
        </>
      );
    default:
      return (
        <>
          <Img src={icon03} alt="https://www.flaticon.com/kr/free-icons/" />
          <span>죽었어요.</span>
        </>
      );
  }
};

const Garbage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);
  const token = localStorage.getItem('accessToken');

  const getList = useCallback(async () => {
    setLoading(true);
    await instance.get(`/garbage`, { headers: { authorization: 'Bearer ' + token } }).then((res) => {
      const newItems = res.data;
      setItems((prevState) => [...prevState, ...newItems]);
    });
    setLoading(false);
  }, [token]);

  useEffect(() => getList(), [getList]);

  return (
    <Container>
      <section>
        <Title>쓰레기통 게시판</Title>
      </section>
      <section>
        <Phone ref={containerRef}>
          <StyleUl>
            {items.map((item, index) => (
              <StyleLi key={index}>{setGarbageContent(index)}</StyleLi>
            ))}
          </StyleUl>
          {loading && <div>Loading...</div>}
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
