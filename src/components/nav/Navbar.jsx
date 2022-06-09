import React, { useState } from 'react';
import './navbar.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDots} from 'react-icons/bi';

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState('#');
  return (
    <nav>
      <a href='#' onClick={() => setActiveNavItem('#')} className={activeNavItem === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNavItem('#about')} className={activeNavItem === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#experience' onClick={() => setActiveNavItem('#experience')} className={activeNavItem === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href='#portfolio' onClick={() => setActiveNavItem('#portfolio')} className={activeNavItem === '#portfolio' ? 'active' : ''}><RiServiceLine /></a>
      <a href='#contact' onClick={() => setActiveNavItem('#contact')} className={activeNavItem === '#contact' ? 'active' : ''}><BiMessageSquareDots /></a>
    </nav>
  )
}

export default Navbar;