import logo from './../../assets/images/logo-header.png';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function Header() {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const btnRegister = () => {
    navigate('/register');
  };

  const btnLogin = () => {
    navigate('/login');
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 769) {
        closeNav(); // Close the navigation when the screen size is 769px or more
      }
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className='navBarContainer'>
      <Link to="/">
        <img src={logo} alt="baanism-logo" className="headerLogo"/>
      </Link>
      <div className='headerMenu'>
        <Link to="/about">
          เกี่ยวกับเรา
        </Link>
        <Link to="/homecontent" className="space">
          Home GURU Content
        </Link>
        <Link to="/contact" className="space">
          ประเมินราคา
        </Link>
        <Link to="/contact" className="space">
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

// export default function Header() {
//   const [navToggle, setNavToggle] = useState(false);

//   const alternar = () => {
//     setNavToggle(!navToggle);
//   };

//   useEffect(() => {
//     if (navToggle === true) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }
//   }, [navToggle]);

//   return (
//     <nav className="Container">
//       <Link to="/">
//         <img src={logo} alt="logo" className="Logo-header" />
//       </Link>
//       <div className={`MobileNav ${navToggle ? 'open' : ''}`}>
//         <button onClick={alternar}>
//           {navToggle ? (
//             <i>
//               <img src={Close} alt="Fechar" />
//             </i>
//           ) : (
//             <i>
//               <img src={Hamburger} alt="abrir" />
//             </i>
//           )}
//         </button>
//       </div>
//       <div className={`header-container ${navToggle ? 'open' : ''}`}>
//         <div className='header-menu'>
//             <Link to="/about" >
//               เกี่ยวกับเรา
//             </Link>
//             <Link to="/homecontent" className="space">
//               Home GURU Content
//           </Link>
//           <Link to="/contact" className="space">
//             ประเมินราคา
//           </Link>
//           <Link to="/contact" className="space">
//             ติดต่อเรา
//           </Link>
//           <Link to="/login">
//             <button className="login-button">
//               ลงชื่อเข้าใช้งาน
//             </button>
//           </Link>
//           <Link to="/login">
//             <button className="register-button">
//               ลงทะเบียน
//             </button>
//           </Link>
//           {/* <button className="login-button">
//               <Link to="/login"  >
//                 ลงชื่อเข้าใช้งาน
//               </Link>
//             </button>
          
//             <button className="register-button">
//               <Link to="/login" >
//                 ลงทะเบียน
//               </Link>
//             </button> */}
//         </div>

//         {/* <div className="header-grap">
//           <Link to="/about" className="space">
//             เกี่ยวกับเรา
//           </Link>
//           <Link to="/homecontent" className="space">
//             Home GURU Content
//           </Link>
//           <Link to="/contact" className="space">
//             ประเมินราคา
//           </Link>
//           <Link to="/contact" className="space">
//             ติดต่อเรา
//           </Link>
//           <button className="login-button">
//             <Link to="/login"  >
//               ลงชื่อเข้าใช้งาน
//             </Link>
//           </button>
        
//           <button className="register-button">
//             <Link to="/login" >
//               ลงทะเบียน
//             </Link>
//           </button>
//         </div> */}
//       </div>
//     </nav>
//   );
// }
