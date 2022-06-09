import React, {useEffect, useRef} from 'react'
import './contact.css';
import {HiOutlineMail} from 'react-icons/hi';
import {RiMessengerLine} from 'react-icons/ri';
import {RiWhatsappLine} from 'react-icons/ri';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hxbheuj', 'template_iu4rcfe', form.current, 'UP6od5vkQO-sHF_1A')
      .then((result) => {
          console.log(result.text);
          alert('Email Sent Sucessfully');
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__details">
          <article className="contact_single_detail">
            <HiOutlineMail className='icon_css'/>
            <h4>Email</h4>
            <h5>kishanprajapat2564788@gmail.com</h5>
            <a href="mailto:kishanprajapat2564788@gmail.com" target={'_blank'} rel="noreferrer">Send a message</a>
          </article>
          <article className="contact_single_detail">
            <RiMessengerLine className='icon_css'/>
            <h4>FB Messenger</h4>
            <h5>thekishanprajapat</h5>
            <a href="https://m.me/thekishanprajapat" target={'_blank'} rel="noreferrer">Send a message</a>
          </article>
          <article className="contact_single_detail">
            <RiWhatsappLine className='icon_css'/>
            <h4>WhatsApp</h4>
            <h5>+1234567890</h5>
            <a href="https://wa.me/+916376892153" target={'_blank'} rel="noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required autoComplete={'off'}/>
          <input type="email" name='email' placeholder='Your Email' required autoComplete={'off'}/>
          <textarea name='message' rows= "7" placeholder='Your Message' required autoComplete={'off'}></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;