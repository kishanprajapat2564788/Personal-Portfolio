import React from 'react';
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {GrInstagram} from 'react-icons/gr';
import {BsTwitter} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer-logo-css'>Kishan Prajapat</a>
      <ul className="links-custom">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio/Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socialMedia">
        <a href="https://fb.com/thekishanprajapat" target={'_blank'} rel="noreferrer"><FaFacebookF /></a>
        <a href="https://www.instagram.com/kisu._.k/" target={'_blank'} rel="noreferrer"><GrInstagram /></a>
        <a href="https://twitter.com/kishan____titan" target={'_blank'} rel="noreferrer"><BsTwitter /></a>
      </div>
      <div className="footer__copyrights">
        <small>&copy; Kishan Prajapat. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;