import React, { useEffect } from 'react';
import './about.css'; // Import your CSS file
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out',
      once: true,
      mirror: true,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <div className='about' id='about'> 
      <div className='aboutSecond'>
        <div className='aboutHeadDiv'>
          <h1
            className='aboutHead'
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            About Us
          </h1>
        </div>

        <div className='aboutBlock'>
          <div
            className='myPicMainDiv'
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div className='myPicDiv'>
              <div className='myPicExtraDiv'></div>
              <img
                src="https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-12860.jpg?semt=ais_hybrid"
                alt=""
              />
            </div>
          </div>

          <div
            className='aboutTextDiv'
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <p className='aboutText'>
              {/* <FaQuoteLeft className='invertedCommas' />*/}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
              ducimus, explicabo dolore nulla architecto totam nobis quia iusto
              tempore, beatae minima ipsam eum incidunt voluptas est amet quae
              delectus saepe.
            </p>
            <p className='aboutText'>
              {/* <FaQuoteLeft className='invertedCommas' />*/}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              voluptatum voluptatibus quis deleniti, iure saepe facere sequi
              officiis quasi quod omnis, perferendis assumenda eius! Aspernatur
              perspiciatis illum corporis voluptatum facere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;