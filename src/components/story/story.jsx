import React, { useEffect } from 'react'
import './story.css'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Story() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='story' id='story'>
            <div className='storySecond'>
                <div className='storyHeadDiv'>
                    <h1 className='storyHead'
                        data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-delay="0"
                        data-aos-duration="1000"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top">Our Story</h1>
                </div>
                <div className='storyBlock'>
                    <div className='myStoryMainDiv'
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top">

                        <div className='myStoryDiv'>
                            <div className='myStoryExtraDiv'></div>
                            <img src="https://img.freepik.com/premium-vector/diverse-group-colleagues-collaborating-around-table-with-laptop-discussing-work-ideas_1280751-62775.jpg?ga=GA1.1.540118392.1694851758&semt=ais_hybrid" alt="" />
                        </div>
                    </div>
                    <div className='storyTextDiv'
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top">
                        <p className='storyText'>
                           {/* <FaQuoteLeft className='invertedCommas' />  */}
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti non asperiores sint dolor, atque, repellendus ut totam aliquid beatae ad maxime itaque rem! At officiis et iure commodi fugit quod.                        </p>
                        <p className='storyText'>
                            { /* <FaQuoteLeft className='invertedCommas' />*/}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti non asperiores sint dolor, atque, repellendus ut totam aliquid beatae ad maxime itaque rem! At officiis et iure commodi fugit quod.
                        </p>
                        <p className='storyText'>
                            { /* <FaQuoteLeft className='invertedCommas' />*/}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti non asperiores sint dolor, atque, repellendus ut totam aliquid beatae ad maxime itaque rem! At officiis et iure commodi fugit quod.
                            {/* <FaQuoteRight className='invertedCommas' /> */}
                        </p>
                    </div>
                </div>




            </div>
        </div>
    )
}
export default Story