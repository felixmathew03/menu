import React from 'react';
import { IoPhonePortraitOutline, IoMailOutline ,IoLocationOutline } from 'react-icons/io5'; 

import { IoLogoFacebook, IoLogoTwitter, IoLogoYoutube, IoLogoInstagram } from 'react-icons/io5';
import '../Scss/Contact.scss'

const Contact = () => {
  return (
    <div className='Contact'>
      <div className="cus">
        <h3>Connect with us</h3>
        <div className='detailss'>
            <div className="subdetails">
                <div className='icon1'> <IoPhonePortraitOutline   /></div>
                <p>+919567843340</p>
            </div>
            <div className='subdetails'>
            <div className='icon1'><IoMailOutline  /></div>
            <p>info@deepnetsoft.com</p>
        </div>
        </div>
        
      </div>
      <div className="cus">
        <h2><span className='deep'>DEEP</span> <span className="net">NET</span> <span className='soft'>SOFT</span></h2>
        <ul className='clist'>
            <li ><IoLogoFacebook/></li>
            <li><IoLogoTwitter/></li>
            <li><IoLogoYoutube/></li>
            <li><IoLogoInstagram/></li>
        </ul>
      </div>
      <div className="cus">
        <h3>find us</h3>
        <div className='details'>
            <div className='icon1'><IoLocationOutline /></div>
            <p>First floor, Geo infopark, Infopark EXPY, Kakkanad</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
