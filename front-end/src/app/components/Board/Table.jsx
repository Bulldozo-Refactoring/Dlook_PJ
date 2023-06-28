import { StyleTable, StyleTd, StyleTh, StyledTr } from 'app/style/StyledComponent';
import { NavLink } from 'react-router-dom';

const renderTh = (thTitle) => {
  return thTitle.map((title, index) => <StyleTh key={`th-${index}`}>{thTitle[index]}</StyleTh>);
};

const renderTr = (modifiedDataList, titleUrl, pageNumber) => {
  return modifiedDataList.map((list, index) => (
    <StyledTr key={list.no}>
      {/* <StyleTd key={`number-${index}`}>{pageNumber * 10 + index + 1}</StyleTd> */}
      <StyleTd key={`number-${index}`}>{list.no}</StyleTd>
      <StyleTd key={`title-${index}`}>
        <NavLink to={`${titleUrl}/${list.no}`} onClick={(state) => state}>
          {list.title}
        </NavLink>
      </StyleTd>
      {Object.keys(list).map((key) => {
        if (key !== 'no' && key !== 'title') {
          return <StyleTd key={`${key}-${index}`}>{list[key]}</StyleTd>;
        }
        return null;
      })}
    </StyledTr>
  ));
};

export const Table = (thTitle, dataList, titleUrl, pageNumber) => {
  return (
    <>
      <StyleTable>
        <thead>
          <tr>{renderTh(thTitle)}</tr>
        </thead>
        <tbody>{renderTr(dataList, titleUrl, pageNumber)}</tbody>
      </StyleTable>
    </>
  );
};
export default Table;
