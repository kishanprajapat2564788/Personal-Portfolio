import React from 'react';
import CV from '../../assets/kishanCV.pdf';

const HeaderButtons = () => {
  return (
    <div className='headerButtons'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#conatct' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default HeaderButtons;