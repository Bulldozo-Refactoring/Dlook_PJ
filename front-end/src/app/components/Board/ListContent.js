import { NavLink } from "react-router-dom" ;
import React from "react";

const BoardList = ({ boardList }) => {
  console.log(boardList);
  return (
    <>
        <tr>
            <td>{boardList.id}</td>
            <th>
            <NavLink to="/">{boardList.title}</NavLink>
            <p>테스트</p>
            </th>
            <td>{boardList.author}</td>
            <td>{boardList.created_date}</td>
        </tr>
    </>
  );
};

export default BoardList;
