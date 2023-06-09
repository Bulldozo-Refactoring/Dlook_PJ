import React from 'react'
import { Link, NavLink } from "react-router-dom";

function HeaderMenu() {
    const activeStyle = {
        color: "#FFCEFE",
        fontWeight: "700",
        
    };

    return (
    <>
    <li><p>알고리즘 문제 풀이</p>
        <ul className='sub_menu'>
            <li><NavLink style={({isActive }) => (isActive ? activeStyle : {})} to="/algorithms/step">문제 추천</NavLink></li>
            <li><NavLink style={({isActive }) => (isActive ? activeStyle : {})} to="/algorithms/type">알고리즘 문제 분석</NavLink></li>
        </ul>
    </li>
    <li><p>전체 게시판</p>
        <ul className="sub_menu">
            <li><NavLink style={({isActive }) => (isActive ? activeStyle : {})} to="/board">전체 게시판</NavLink></li>
        </ul>
    </li>
    <li><p>쓰레기통</p>
        <ul className="sub_menu">
            <li><NavLink style={({isActive }) => (isActive ? activeStyle : {})} to="/garbage">쓰레기통</NavLink></li>
        </ul>
    </li>
    <li><p>더보기</p>
        <ul className="sub_menu">
            <li><NavLink style={({isActive }) => (isActive ? activeStyle : {})} to="/">내 정보</NavLink></li>
            <li><NavLink style={({isActive }) => (isActive ? activeStyle : {})} to="/notice">공지사항/이벤트</NavLink></li>
            <li><NavLink style={({isActive }) => (isActive ? activeStyle : {})} to="/">이용방법</NavLink></li>
            <li><NavLink style={({isActive }) => (isActive ? activeStyle : {})} to="/">서비스 정책</NavLink></li>
        </ul>
    </li>
    </>
  );
}

export default HeaderMenu