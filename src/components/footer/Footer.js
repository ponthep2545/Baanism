import React, { useState, useEffect } from 'react';
import './Footer.css'; // Import your CSS file
import Hamburger from '../../assets/images/icon-hamburger.svg';
import Close from '../../assets/images/icon-close.svg';
import logo from './../../assets/images/logo-footer.png';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';


export default function Footer() {
  const [navToggle, setNavToggle] = useState(false);

  const alternar = () => {
    setNavToggle(!navToggle);
  };

  useEffect(() => {
    if (navToggle === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [navToggle]);

  return (
    <nav className="footer">
      <Link to="/">
        <img src={logo} alt="logo" className="Logo-footer" />
      </Link>
      <div className={`MobileNav ${navToggle ? 'open' : ''}`}>
        <button onClick={alternar}>
          {navToggle ? (
            <i>
              <img src={Close} alt="Fechar" />
            </i>
          ) : (
            <i>
              <img src={Hamburger} alt="abrir" />
            </i>
          )}
        </button>
      </div>
      <br/>
      <br/>
      <div className="social-media-icons">
        <a href="https://web.facebook.com/BAANISM" title="Facebook" target="_blank"><i className="fa fa-facebook"></i></a>
        <a href="#" title="Line"><i className="fa-brands fa-line"></i></a>
        <a href="#" title="Tiktok"><i className="fa-brands fa-tiktok"></i></a>
        <a href="#" title="E-Mail"><i className="fa fa-envelope"></i></a>
        <a href="#" title="Tel."><i className="fa fa-phone"></i></a>
      </div>
      <br/>
      <br/>
      <p className='word'>23/198 คณาสิริ รังสิตคลอง 2 ถ.เสมาฟ้าคราม ต.คูคต อ.ลําลูกกา ปทุมธานี 12130 ประเทศไทย (+66) 085-055-6352</p>
      <br/>
      <p className='word' > Copyright © 2023 BAANISM Co., Ltd. All rights reserved.</p>
    </nav>
  );
}