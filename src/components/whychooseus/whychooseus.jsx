import React, { useEffect } from 'react'
import './whychooseus.css'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';


function ChooseUs() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='about' id='chooseUs'>
            <div className='aboutSecond'>
                <div className='aboutHeadDiv'>
                    <h1 className='aboutHead'
                        data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-delay="0"
                        data-aos-duration="1000"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top">Why Choose Us</h1>
                </div>
                <div className='aboutBlock'>
                    <div className='myPicMainDiv'
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top">

                        <div className='myPicDiv'>
                            <div className='myPicExtraDiv'></div>
                            <img src="https://img.freepik.com/free-vector/businessman-target-arrow-woman-analysing-data-laptop-business-strategy-business-goals-plan-concept-white-background_335657-1650.jpg" alt="" />
                        </div>
                    </div>
                    <div className='aboutTextDiv'
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top">
                        
                        <ul>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti non asperiores sint dolor, atque, repellendus ut totam aliquid beatae ad maxime itaque rem! At officiis et iure commodi fugit quod.
                            </li><br />
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti non asperiores sint dolor, atque, repellendus ut totam aliquid beatae ad maxime itaque rem! At officiis et iure commodi fugit quod.
                            </li><br />
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti non asperiores sint dolor, atque, repellendus ut totam aliquid beatae ad maxime itaque rem! At officiis et iure commodi fugit quod.
                            </li>
                        </ul>
                    </div>
                </div>




            </div>
        </div>
    )
}
export default ChooseUs