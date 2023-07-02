// [ ] 추후 정리 필요
import { Title } from 'app/style/GlobalStyle';
import { styled } from 'styled-components';

const StyleSection = styled.section`
  padding: 50px 80px 100px;
`;
const StyleTitle = styled(Title)`
  margin-bottom: 2rem;
  text-align: center;
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
    border-left: 2px solid ${({ theme }) => theme.light.t03};
    background-color: ${({ theme }) => theme.light.b03};
  }
  span:last-child {
    width: calc(100% - 140px);
    padding: 10px 2rem 9px;
    border-bottom: 2px solid ${({ theme }) => theme.light.b03};
  }
  li:nth-child(3) span:last-child {
    width: calc(100% - 120px);
  }
  li:nth-child(3) span:first-child {
    width: 120px;
  }
`;
const BoardContent = styled.div`
  min-height: 30rem;
  padding: 1rem;
  margin-bottom: 10px;
  border: 2px solid ${({ theme }) => theme.light.b03};
  font-size: 1rem;
  font-weight: 400;
`;
const BoardText = styled.textarea`
  width: 100%;
  min-height: 30rem;
  padding: 1rem;
  margin-bottom: 10px;
  border: 2px solid ${({ theme }) => theme.light.b02};
  font-size: 1rem;
  font-weight: 400;
`;
const BtnDiv = styled.div`
  display: grid;
  grid-auto-column: minmax(40px, 40px);
  margin-bottom: 3rem;
  button:nth-child(1) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
  button:nth-child(2) {
    grid-column: 29/30;
    grid-row: 1 / 2;
  }
  button:nth-child(3) {
    grid-column: 15 / 16;
    grid-row: 1 / 2;
  }
`;
// list
const Form = styled.form`
  button {
    float: right;
  }
`;
const StyledSelect = styled.select`
  display: inline-block;
  width: calc(100% - 140px);
  padding: 9px 2rem;
  border: 2px solid ${({ theme }) => theme.light.b02};
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
    box-shadow: 0 0 0 1px ${({ theme }) => theme.color.c07};
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
// list
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

export {
  Board,
  BoardContent,
  BoardText,
  BtnDiv,
  Form,
  PaginButton,
  Pagination,
  StyleLi,
  StyleP,
  StyleSection,
  StyleTitle,
  StyleUl,
  StyledButton,
  StyledSelect,
  StyledUl,
  Tab,
  Wrap,
};
export default Button;
