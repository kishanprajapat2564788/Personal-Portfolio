import React from 'react'
import './experience.css';
import htmlIcon from '../../assets/icons8-html-5.svg';
import CssIcon from '../../assets/icons8-css3.svg';
import JSIcon from '../../assets/icons8-javascript.svg';
import BootstrapIcon from '../../assets/icons8-bootstrap.svg';
import TaiwindIcon from '../../assets/tailwind-css.svg';
import ReactIcon from '../../assets/icons8-react.svg';
import NextJSIcon from '../../assets/nextjs.svg';
import NodeIcon from '../../assets/icons8-node-js.svg';
import ExpressIcon from '../../assets/expressjs.svg';
import MongoIcon from '../../assets/icons8-mongodb.svg';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="frontend-inner-container">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            <article className="inner-article">
              <img src={htmlIcon} alt="Html5Icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">
                  Experienced
                </small>
              </div>
            </article>
            <article className="inner-article">
              <img src={CssIcon} alt="Html5Icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">
                  Intermediate
                </small>
              </div>
            </article>
            <article className="inner-article">
              <img src={JSIcon} alt="Html5Icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">
                  Experienced
                </small>
              </div>
            </article>
            <article className="inner-article">
              <img src={BootstrapIcon} alt="Html5Icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">
                  Experienced
                </small>
              </div>
            </article>
            <article className="inner-article">
              <img src={TaiwindIcon} alt="Html5Icon" />
              <div>
                <h4>Tailwind CSS</h4>
                <small className="text-light">
                  Intermediate
                </small>
              </div>
            </article>
            <article className="inner-article">
              <img src={ReactIcon} alt="Html5Icon" />
              <div>
                <h4>React JS</h4>
                <small className="text-light">
                  Experienced
                </small>
              </div>
            </article>
            <article className="inner-article">
              <img src={NextJSIcon} alt="Html5Icon" className='change-color'/>
              <div>
                <h4>Next JS</h4>
                <small className="text-light">
                  Intermediate
                </small>
              </div>
            </article>
          </div>
        </div>
        <div className="Backend-inner-container">
          <h3>Backend Development</h3>
          <div className="experience-content">
            <article className="inner-article">
              <img src={NodeIcon} alt="Html5Icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">
                  Intermediate
                </small>
              </div>
            </article>
            <article className="inner-article">
              <img src={ExpressIcon} alt="Html5Icon" className='change-color'/>
              <div>
                <h4>Express JS</h4>
                <small className="text-light">
                  Intermediate
                </small>
              </div>
            </article>
            <article className="inner-article">
              <img src={MongoIcon} alt="Html5Icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">
                  Intermediate
                </small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;