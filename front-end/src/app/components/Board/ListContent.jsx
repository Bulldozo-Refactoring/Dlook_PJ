import { NavLink } from "react-router-dom" ;
import React from "react";

const ListContent = ({ listContent }) => {
  return (
    <>
        <tr>
            <td>{listContent.id}</td>
            <th>
            <NavLink to="/">{listContent.title}</NavLink>
            </th>
            <td>{listContent.author}</td>
            <td>{listContent.created_date}</td>
        </tr>
    </>
  );
};

export default ListContent;
