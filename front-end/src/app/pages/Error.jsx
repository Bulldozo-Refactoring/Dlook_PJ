import { styled } from 'styled-components';

function Error() {
  return (
    <Container>
      어라라
      <br /> 난 몰라...!
    </Container>
  );
}
const Container = styled.div`
  padding: 100px;
  font-size: 50px;
  font-weight: 700;
  text-align: center;
`;
export default Error;
