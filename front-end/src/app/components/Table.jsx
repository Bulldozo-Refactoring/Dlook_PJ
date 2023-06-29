import { StyleTable, StyledTr } from 'app/style/GlobalStyle';
import { NavLink } from 'react-router-dom';

const renderTh = (thTitle) => {
  return thTitle.map((title, index) => <th key={`th-${index}`}>{thTitle[index]}</th>);
};

const renderTr = (modifiedDataList, titleUrl, pageNumber) => {
  return modifiedDataList.map((list, index) => (
    <StyledTr key={list.no}>
      {/* <StyleTd key={`number-${index}`}>{pageNumber * 10 + index + 1}</StyleTd> */}
      <td key={`number-${index}`}>{list.no}</td>
      <td key={`title-${index}`}>
        <NavLink to={`${titleUrl}/${list.no}`} onClick={(state) => state}>
          {list.title}
        </NavLink>
      </td>
      {Object.keys(list).map((key) => {
        if (key !== 'no' && key !== 'title') {
          return <td key={`${key}-${index}`}>{list[key]}</td>;
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
