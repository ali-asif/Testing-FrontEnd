import React, { useEffect, useState } from 'react'
import './contact.css'
import { MdEmail, MdArrowForwardIos, MdLocationPin } from 'react-icons/md'
import { IoMdCall } from 'react-icons/io'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  useEffect(() => {
    AOS.init({
        duration: 1500,
        easing: 'ease-in-out',
        once: true,
        mirror: true,
        anchorPlacement: 'top-bottom',
    });
  }, [])

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='contact' id="contact">
      <div className='contactSecondDiv'>
        <div className='contactHeadDiv'>
          <h1 className='contactHead'
            data-aos="zoom-in"
            data-aos-offset="150"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top">Contact Me</h1>
        </div>
        <div className='contactMainBlock'>
          {/* Animated Text Section */}
          <div className="animated-text"> 
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Let's connect and discuss how I can help you with your project.</p>
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">I'm always open to new opportunities and challenges.</p>
          </div>

          {/* Form Section - Right side */}
          <div className="form-container"> 
            <form onSubmit={handleSubmit} className='contactForm'>
              <div className='contactFormInputDiv'>
                <label htmlFor="name" className='contactFormLabel'>Name:</label>
                <input 
                  type="text" 
                  id="name" 
                  className='contactFormInput' 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                />
              </div>
              <div className='contactFormInputDiv'>
                <label htmlFor="email" className='contactFormLabel'>Email:</label>
                <input 
                  type="email" 
                  id="email" 
                  className='contactFormInput' 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
              </div>
              <div className='contactFormInputDiv'>
                <label htmlFor="message" className='contactFormLabel'>Message:</label>
                <textarea 
                  id="message" 
                  className='contactFormInput' 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                  required 
                />
              </div>
              <button type="submit" className='contactFormButton'>Send</button>
            </form>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Contact;