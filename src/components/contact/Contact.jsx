import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'
import {AiOutlineFacebook} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_a66gvxg', 'template_qkus9fs', form.current, 'Y1ae6v2aejbxJYEMG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <AiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>eva0226520@gmail.com</h5>
            <a href='mailto:eva0226520@gmail.com'>Send a message</a>
          </article>
          <article className='contact_option'>
            <AiOutlineMessage className='contact_option-icon'/>
            <h4>Message</h4>
            <h5>+64 2902256235</h5>
            <a href='http://m.me/AiEva'>Send a message</a>
          </article>
        <article className='contact_option'>
            <AiOutlineFacebook className='contact_option-icon'/>
            <h4>Facebook</h4>
            <h5>eva0226520@gmail.com</h5>
            <a href='http://api.whatsapp.com/send?phone=+'>Send a message</a>
          </article>
        </div>
        {/* end of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact