import React, { useState, useEffect } from 'react';
import './Footer.css'; // Import your CSS file

import { Link } from 'react-router-dom';

import 'react-icons/fa';

import { FaEnvelope, FaFacebook, FaLine, FaPhone, FaTiktok } from 'react-icons/fa';


export default function Footer() {
  return (
    <nav className="footer">
      <p className='word' > Copyright © 2023 BAANISM Co., Ltd. All rights reserved.</p>
      <Link >
      <p className='word'>นโยบายการใช้งาน</p>
      </Link>
      <Link >
      <p className='word'>ติดต่อสอบถาม</p>
      </Link>
      <Link >
      <p className='word'>เงื่อนไขการใช้งาน</p>
      </Link>
    </nav>
  );
}