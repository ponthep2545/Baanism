import React, { useState, useEffect } from 'react';
import './Header.css'
import { func } from 'prop-types';
// import './Header.css'; // Import your CSS file
// import Hamburger from '../../assets/images/icon-hamburger.svg';
// import Close from '../../assets/images/icon-close.svg';
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
<<<<<<< HEAD
        <Link to = "/user-profile">
=======
        <Link>
>>>>>>> b8365f329fa42fd5a9353cebfe0e2abd12894fd3
          <button className='lineButton' >
            ลงชื่อเข้าใช้งาน
          </button>
        </Link>
<<<<<<< HEAD
        <Link to =  "/admin-profile">
=======
        <Link>
>>>>>>> b8365f329fa42fd5a9353cebfe0e2abd12894fd3
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
<<<<<<< HEAD
// }
=======
// }
>>>>>>> b8365f329fa42fd5a9353cebfe0e2abd12894fd3
