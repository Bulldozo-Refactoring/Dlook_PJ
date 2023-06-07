import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router";
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.svg';
import CloseIcon from '@mui/icons-material/Close';
import HeaderMenu from './HeaderMenu';
import MenuIcon from '@mui/icons-material/Menu';
import HeaderUser from './HeaderUser';

const Header = () => {  
    const [isOpen, setMenu] = useState(false);
    const { pathname } = useLocation();
    const toggleMenu = () => {
          setMenu(isOpen => !isOpen);
      }    
    useEffect(() => {
        setMenu(false);
    }, [pathname]);
    /**
     * useEffect 훅은 컴포넌트가 렌더링될 때 실행되는 부수 효과를 처리하는 데 사용
     * pathname 변수가 변경될 때마다 호출된다.
     */

    return(
        <>
        <div className="header_inner">
            <ul className='header_wrapper'>
                <li><MenuIcon sx={{fontSize: 60, color: "#A6B1E1", zIndex: 1000}} onClick={()=>toggleMenu()}></MenuIcon></li>                
                <li id='logo'><Link to="/"><img src={logo} /></Link></li>
                <HeaderUser />
            </ul>
            <ul className={isOpen ? "show_menu" : "hide_menu"}>
                <CloseIcon onClick={()=>toggleMenu()} />
                <HeaderMenu />
            </ul>
        </div>
        </>
    );
}
    
export default Header;