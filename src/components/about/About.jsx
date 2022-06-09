import React from 'react';
import './about.css'
import ME from '../../assets/me-image-2.jpg';
import {FaAward} from 'react-icons/fa';
import {GiSkills} from 'react-icons/gi';
import {RiFolderChartLine} from 'react-icons/ri';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__profile">
            <img className='me_image_2' src={ME} alt="aboutMe" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__single_card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>7+ Months Working</small>
            </article>
            <article className="about__single_card">
              <GiSkills className='about__icon'/>
              <h5>Skills</h5>
              <small>MERN STACK TECH</small>
            </article>
            <article className="about__single_card">
              <RiFolderChartLine className='about__icon'/>
              <h5>Projects</h5>
              <small>8+ Projects Completed</small>
            </article>
          </div>
          <p>Computer Science graduate with 7+ months of experience in developing websites/applications using front-end and back-end technologies and also experience in working with client projects. Im looking to join a smaller team with whom communication and teamwork are paramount. Having good experience working with JavaScript and its Frameworks and Libraries, I would jump at any opportunity to continue growing my skillset in the JS field </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;