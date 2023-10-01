import logo from './../../assets/images/logo-header.png';
import './Header.css'
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react'; // Import the React library

export default function Header(){
  const navigate = useNavigate();
  
  const btnRegister = () => {
    navigate('/register');
  }

  const btnLogin = () => {
    navigate('/login');
  }
  
  return(
    <>
      <nav>
        <Link to="/">
          <img src={logo} alt="baanism-logo" className="logoStyle"/>
        </Link>

        <div>
          <ul className='navBar'>
            <li>
              <Link to="/about" >
                เกี่ยวกับเรา
              </Link>
            </li>
            <li>
              <Link to='/homecontent'>
                Home GURU Content
              </Link>
            </li>
            <li>
              <Link to='/'>
                ประเมินราคา
              </Link>
            </li>
            <li>
              <Link to='/'>
                ติดต่อเรา
              </Link>
            </li>
            <li>
              <button className='lineButton' onClick={btnLogin} >
                ลงชื่อเข้าใช้งาน
              </button>
            </li>
            <li>
              <button className='solidButton' onClick={btnRegister} >
                ลงทะเบียน
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}