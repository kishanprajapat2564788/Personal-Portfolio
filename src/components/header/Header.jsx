import React from 'react';
import './header.css';
import HeaderButtons from './HeaderButtons';
import ProfileImage from '../../assets/profile_pic-new.png';
import SocialHeaderLinks from './SocialHeaderLinks';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>
          Hello I'm
        </h5>
        <h1>Kishan Prajapat</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <HeaderButtons />
        <SocialHeaderLinks />
        <div className='mine-image-css'>
          <img className='profile_image' src={ProfileImage} alt="Profile" />
        </div>
        <a href='#contact' className='Scroll__Down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;