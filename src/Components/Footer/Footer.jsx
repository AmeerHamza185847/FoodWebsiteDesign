import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import './Footer.css';


export const Footer = () => {
  return (
    <div className='footerContainer'>

      <div className='iconContainer'>
        <FaFacebook 
        size={32} 
        color="blue"
        cursor="pointer"
        />
        <FaSquareInstagram 
        size={32} 
        color="red"
        cursor="pointer"
        />
        <FaTwitter 
        size={32} 
        color="blue"  
        cursor="pointer"
        />
      </div>
      <div className='footerContent'>
        <p>All rights reserved designed by <a>AmeerHamza</a>
        </p>
      </div>

    </div>
  )
}
