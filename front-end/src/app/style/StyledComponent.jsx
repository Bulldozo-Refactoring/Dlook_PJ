import { styled } from 'styled-components';
// h 태그
const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.common.xl};
  font-weight: 700;
`;
const SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.common.lg};
  font-weight: 700;
`;
// Table - 합쳐도 될듯
const StyleTable = styled.table`
  width: ${({ theme }) => theme.common.col12};
  thead tr th:nth-child(2)) {
    width: ${({ theme }) => theme.common.col7};
  }
`;
const StyleTh = styled.th`
  padding: 10px;
  border-right: 1px solid ${({ theme }) => theme.light.b01};
  background-color: ${({ theme }) => theme.color.c03};
  font-weight: 600;
  color:  ${({ theme }) => theme.light.b01};
  &:last-child {
    border: none;
  }
}
`;
const StyledTr = styled.tr`
  * {
    font-weight: 500;
  }
  &:hover *,
  &:focus *,
  &.active * {
    color: ${({ theme }) => theme.color.c07};
    background-color: ${({ theme }) => theme.light.t02};
    cursor: pointer;
  }
`;
const StyleTd = styled.td`
  padding: 8px;
  text-align: center;
  border-right: 1px solid ${({ theme }) => theme.color.c01};
  border-bottom: 1px solid ${({ theme }) => theme.color.c01};
  &:last-child {
    border-right: none;
  }
`;

// [ ] 말풍선 - 변수 수정 필요
const Tooltip = styled.div`
  background-color: #eef3fd;
  border: #7689fd solid 1px;
  border-radius: 5px;
  color: #505bf0;
  font-size: 12px;
  font-weight: 500;
  height: auto;
  letter-spacing: -0.25px;
  margin-top: 6.8px;
  padding: 5px 11px;
  position: relative;
  width: fit-content;
  z-index: 100;
  &::after {
    border-color: #eef3fd transparent;
    border-style: solid;
    border-width: 0 6px 8px 6.5px;
    content: '';
    display: block;
    left: 75px;
    position: absolute;
    top: -7px;
    width: 0;
    z-index: 1;
  }
  &::before {
    border-color: #7689fd transparent;
    border-style: solid;
    border-width: 0 6px 8px 6.5px;
    content: '';
    display: block;
    left: 75px;
    position: absolute;
    top: -8px;
    width: 0;
    z-index: 0;
  }
`;

// [ ] 재사용 가능한 컴포넌트로 바꾸기
const SubmitButton = styled.button`
  margin: 0 auto;
  padding: 20px 40px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.color.c04};
  font-weight: 500;
  font-size: ${({ theme }) => theme.common.md};
  line-height: ${({ theme }) => theme.common.lg};
  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.color.c05};
    color: ${({ theme }) => theme.light.b01};
  }
`;

// [ ] 순서 정리 필요
export { SubmitButton, StyleTable, StyleTd, StyleTh, StyledTr, Title, SubTitle, Tooltip };
