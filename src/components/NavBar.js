import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHippo, faTimes } from "@fortawesome/free-solid-svg-icons";
import './NavBar.css';
import Button from './Button.js';

function NavBar() {
  const [click, setClick] = useState(false); 

  const [button, setButton] =useState(true);
  
  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => { 
    if(window.innerWidth <= 960) { 
      setButton(false)
    } else { 
      setButton(true)
    }
  }; 

  window.addEventListener('resize',showButton);

  useEffect(() => { 
    showButton()}, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
          TRVL <FontAwesomeIcon icon={faHippo} />
        </NavLink>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars}/>}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'> 
          <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
            Home
          </NavLink>
          </li>
          <li className='nav-item'> 
          <NavLink to='/services' className='nav-links' onClick={closeMobileMenu}>
            Services
          </NavLink>
          </li>
          <li className='nav-item'> 
          <NavLink to='/products' className='nav-links' onClick={closeMobileMenu}>
            Products
          </NavLink>
          </li>
          <li className='nav-item'> 
          <NavLink to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
            Sign up
          </NavLink>
          </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
      </div>
    </nav>
  );
}

export default NavBar;
