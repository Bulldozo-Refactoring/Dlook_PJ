import * as React from "react";
import { NavLink } from "react-router-dom";
import CuteNavLink from './CuteNavLink';

function AlgorithmsMenu() {
    const disabled = {
        padding: '15px 20px',
    };
    const active = {
        fontWeight: "700",
        padding: '15px 20px',
        borderBottom: '3px solid #424874',
    };

    return (
    <>
    <div className="menu">
        <ul className="top_menu">
            <li><NavLink style={({isActive }) => (isActive ? active : disabled)} to="/algorithms/step">문제 추천</NavLink></li>
            <li><NavLink style={({isActive }) => (isActive ? active : disabled)} to="/algorithms/type">알고리즘 문제 분석</NavLink></li>
            <li><NavLink style={({isActive }) => (isActive ? active : disabled)} to="/algorithms/rank">랭킹분석</NavLink></li>
        </ul>
    </div>
    <CuteNavLink />
    </>
    );
}

export default AlgorithmsMenu;