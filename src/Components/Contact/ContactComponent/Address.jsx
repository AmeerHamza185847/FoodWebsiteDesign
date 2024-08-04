import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import './Address.css';

export const Address = () => {
    return (
        <div className='addressContainer'>
            <div className='links'>
                <FaLocationDot size={32} color='blue' /> <span>District Mohmand</span>
            </div>
            <div className='links'>
                <BsGithub size={32} color='blue'  />
                <span>
                    <a href="https://github.com/AmeerHamza185847">Github</a>
                </span>
            </div>

            <div className='links'>
            <FaLinkedin size={32} color='blue' /> 
            <span> 
                <a href="https://www.linkedin.com/in/ameer-hamza-087a21284/">Linkedin</a> </span>
    
            </div>
        </div>
    )
}
