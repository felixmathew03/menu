import React, { useState } from 'react';
import "../Scss/Nav.scss";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='Nav'>
      <h2><span className='deep'>DEEP</span> <span className="net">NET</span> <span className='soft'>SOFT</span> </h2>
      
      <button className="toggle-button" onClick={toggleMenu}>
        {isOpen ? 'Close Menu' : 'Open Menu'}
      </button>
      
      <ul className={`nlist ${isOpen ? 'open' : ''}`}>
        <li>HOME</li>
        <li>MENU</li>
        <li>MAKE A Reservation</li>
        <li>Contact us</li>
      </ul>
    </div>
  );
}

export default Nav;
