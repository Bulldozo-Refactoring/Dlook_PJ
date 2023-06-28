import { styled } from 'styled-components';

// Table
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
    background-color: ${({ theme }) => theme.color.c04};
    color: ${({ theme }) => theme.light.t03};
  }
  &:focus {
    boxshadow: '0 0 0 0.2rem rgba(0,123,255,.5) !important';
  }
`;

export { StyleTable, StyleTd, StyleTh, StyledTr, SubmitButton };
