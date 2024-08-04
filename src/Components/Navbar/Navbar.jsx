import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

import logo1 from '../../assets/Images/foodLogo1.png';

export const Navbar = () => {
    return (
        <div>
          <nav className="navBar">
          <div className='logoContainer'><img src={logo1} alt="" /></div>
            <ul>
              <li>
                <NavLink
                  to=""
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >Home</NavLink>
              </li>
              <li>
              <NavLink
                  to="about"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >About</NavLink>
              </li>
              <li>
              <NavLink
                  to="food"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >Food</NavLink>
              </li>
              <li>
              <NavLink
                  to="contact"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )
    }