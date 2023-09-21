import React, { useState, useEffect } from 'react';
import './Header.css'
import logo from './../../assets/images/logo-header.png';
import { Link } from 'react-router-dom';

export default function Header(){
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className='navBarContainer'>
      <Link to="/">
        <img src={logo} alt="baanism-logo" className="headerLogo"/>
      </Link>
      <div className='headerMenu'>
        <Link to="/about" >
          เกี่ยวกับเรา
        </Link>
        <Link to="/homecontent" >
          Home GURU Content
        </Link>
        <Link to="/contact" >
          ประเมินราคา
        </Link>
        <Link to="/contact" >
          ติดต่อเรา
        </Link>
      </div>
      <div className='headerButton'>
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
      </div>
    </nav>
  );
}