import logo from './../../assets/images/logo-header.png';
import './Header.css'
import { Link } from 'react-router-dom';

export default function Header(){
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
              <button className='lineButton' >
                ลงชื่อเข้าใช้งาน
              </button>
            </li>
            <li>
              <button className='solidButton'>
                ลงทะเบียน
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}