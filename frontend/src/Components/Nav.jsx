import React from 'react';
import "../Scss/Nav.scss"

const Nav = () => {
  return (
    <div className='Nav'>
      <h2><span className='deep'>DEEP</span> <span className="net">NET</span> <span className='soft'>SOFT</span> </h2>
      <ul className="nlist">
        <li>HOME</li>
        <li>MENU</li>
        <li>MAKE A Reservation</li>
        <li>Contact us</li>
      </ul>
    </div>
  )
}

export default Nav
