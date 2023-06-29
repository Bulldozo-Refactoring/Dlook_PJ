import { Title } from 'app/style/GlobalStyle';
import { Container, Phone, PhoneBtn, StyleLi, StyleUl } from 'app/style/StyleGarbage';

const Garbage = () => {
  return (
    <Container>
      <Title>Garbage Collection</Title>
      <Phone>
        <StyleUl>
          {dummyList.map((it, index) => {
            return <StyleLi key={index}>{it.id}</StyleLi>;
          })}
        </StyleUl>
        <PhoneBtn to="/garbage/write">작성</PhoneBtn>
      </Phone>
    </Container>
  );
};

const dummyList = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

export default Garbage;
