// import React, { useState, useEffect } from 'react';
import { useState } from 'react'
import { FaBars } from "react-icons/fa";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIconName } from '@fortawesome/free-solid-svg-icons';

import './Header.css'
import logo from './../../assets/images/logo-header.png';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
// import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg'
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
// import './navbar.css'x
export default function Header(){
  // const [isNavOpen, setIsNavOpen] = useState(false);

  // const toggleNav = () => {
  //   setIsNavOpen(!isNavOpen);
  // };
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  return (
    <nav className='navBarContainer'>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="baanism-logo" className="headerLogo"/>
        </Link>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <FaBars/>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <Link to="/">เกี่ยวกับเรา</Link>
            </li>
            <li>
              <Link to="/blog">Home GURU Content</Link>
            </li>
            <li>
              <Link to="/projects">ประเมินราคา</Link>
            </li>
            <li>
              <Link to="/about">ติดต่อเรา</Link>
            </li>
            <li>
              <Link>
                <button className='lineButton' >
                  ลงชื่อเข้าใช้งาน
                </button>
              </Link>
            </li>
            <li>
              <Link>
                <button className='solidButton' >
                ลงทะเบียน
                </button>
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className='headerButton'>
        <Link>
          <button className='lineButton' >
            ลงชื่อเข้าใช้งาน
          </button>
        </Link>
        <Link>
          <button className='solidButton'>
            ลงทะเบียน
          </button>
        </Link>
      </div> */}
    </nav>
    // <nav className='navBarContainer'>
    //   <div className='hamburger' onClick={handleShowNavbar}>
    //   </div>
      // <Link to="/">
      //   <img src={logo} alt="baanism-logo" className="headerLogo"/>
      // </Link>
    //   <div className='headerMenu'>
    //     <Link to="/about" >
    //       เกี่ยวกับเรา
    //     </Link>
    //     <Link to="/homecontent" >
    //       Home GURU Content
    //     </Link>
    //     <Link to="/contact" >
    //       ประเมินราคา
    //     </Link>
    //     <Link to="/contact" >
    //       ติดต่อเรา
    //     </Link>
    //   </div>
      // <div className='headerButton'>
      //   <Link>
      //     <button className='lineButton' >
      //       ลงชื่อเข้าใช้งาน
      //     </button>
      //   </Link>
      //   <Link>
      //     <button className='solidButton'>
      //       ลงทะเบียน
      //     </button>
      //   </Link>
      // </div>
    // </nav>
    
  );
}