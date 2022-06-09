import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {FiFacebook} from 'react-icons/fi'; 

const SocialHeaderLinks = () => {
  return (
    <div className='social__side__header'>
        <a href='https://www.linkedin.com/in/kishan-prajapat-828934170/' rel="noreferrer" target="_blank"><BsLinkedin /></a>
        <a href='https://github.com/kishanprajapat2564788' target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href='https://instagram.com/kisu._.k' target="_blank" rel="noreferrer"><BsInstagram /></a>
        <a href='https://fb.com/thekishanprajapat' target="_blank" rel="noreferrer"><FiFacebook size={19}/></a>
    </div>
  )
}

export default SocialHeaderLinks;