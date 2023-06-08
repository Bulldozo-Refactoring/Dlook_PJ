import { NavLink } from "react-router-dom";

export default function CuteNavLink(props) {
  const disabled = {
    padding: '15px 20px',
  };
  const active = {
    fontWeight: "700",
    padding: '15px 20px',
    borderBottom: '3px solid #424874',
  };

  console.log(props.to  + ', ' + props.children);

  return (
    <>
       <ul className='bottom_menu'>
          <li><NavLink style={({isActive }) => (isActive ? active : disabled)} to={props.to}>{props.children}</NavLink></li>
        </ul>

      <NavLink style={({isActive }) => (isActive ? active : disabled)} {...props}></NavLink>
    </>
  );
}

/* <li><CuteNavLink style={({isActive }) => (isActive ? active : disabled)} to="/algorithms/step">실력별 추천</CuteNavLink></li>
            <li><CuteNavLink style={({isActive }) => (isActive ? active : disabled)} to="/algorithms/child">알고리즘 분류</CuteNavLink></li>
        </ul>
        <ul className="bottom_menu">
            <li><CuteNavLink style={({isActive }) => (isActive ? active : disabled)} to="/algorithms/type">유형별 분석</CuteNavLink></li>
            <li><CuteNavLink style={({isActive }) => (isActive ? active : disabled)} to="/algorithms/wrong">오답 유형</CuteNavLink></li>
        </ul>
        <ul className="bottom_menu">
            <li><CuteNavLink style={({isActive }) => (isActive ? active : disabled)} to="/algorithms/rank">랭킹분석</CuteNavLink></li>
        </ul> */