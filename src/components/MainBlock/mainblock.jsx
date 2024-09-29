// import React, { useEffect } from 'react'
// import './mainblock.css'
// import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import myMainBlockPic from '../../images/mainBlockPic.gif'
// import useWebAnimations from '@wellyshen/use-web-animations'


// function About() {
//     const ContactAnimation = useWebAnimations({
//         keyframes: [
//             { boxShadow: '0 0 10px yellow' },
//             { boxShadow: '0 0 10px #0f93ff' },
//             { boxShadow: '0 0 10px #02cf24' },
//             { boxShadow: '0 0 10px pink' },
//             { boxShadow: '0 0 10px yellow' },
//         ],
//         animationOptions: {
//             duration: 5000,
//             iterations: Infinity
//         }
//     })
//     useEffect(() => {
//         AOS.init();
//     }, [])
//     return (
//         <div className='mainBlock' id='mainBlock'>
//             <div className='mainBlockSecond'>
//                 <div className='mainBlockBlock'>

//                     <div className='mainBlockTextDiv'
//                         data-aos="fade-up"
//                         data-aos-offset="200"
//                         data-aos-delay="100"
//                         data-aos-duration="1000"
//                         data-aos-mirror="true"
//                         data-aos-once="false"
//                         data-aos-anchor-placement="top">
//                         <p className='namePara'>
//                             <b>Where creativity</b>
//                         </p>

//                         <div className='expDiv'>
//                             <p className='expPara'>
//                                 <b>meets technology</b></p>
//                         </div>
//                         <div className='expDivTxt'>
//                             <p className='expParaTxt'>
//                                 <b style={{ color: "black" }}>Transforming businesses with creativity and exceptional results.</b></p>
//                         </div>

//                         <a href="#contact" style={{ textDecoration: 'none' }} rel="noreferrer" target='_blank'>
//                             <div className='githubDiv' ref={ContactAnimation.ref}
//                                 data-aos="flip-left"
//                                 data-aos-offset="0"
//                                 data-aos-delay="2000"
//                                 data-aos-duration="1000"
//                                 data-aos-mirror="false"
//                                 data-aos-once="true"
//                                 data-aos-anchor-placement="top" >
//                                 Contact Us
//                             </div>
//                         </a>

//                     </div>

//                     <div className='myMainBlockMainDiv'
//                         data-aos="fade-up"
//                         data-aos-offset="200"
//                         data-aos-delay="100"
//                         data-aos-duration="1000"
//                         data-aos-mirror="true"
//                         data-aos-once="false"
//                         data-aos-anchor-placement="top">

//                         <div className='myMainBlockDiv'>
//                             <div className='myMainBlockExtraDiv'></div>
//                             <img src={myMainBlockPic} alt="" />
//                         </div>
//                     </div>

//                 </div>




//             </div>
//         </div>
//     )
// }
// export default About


import React, { useEffect } from 'react';
import './mainblock.css';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import myMainBlockPic from '../../images/mainBlockPic.gif';
import useWebAnimations from '@wellyshen/use-web-animations';

function About() {
    const ContactAnimation = useWebAnimations({
        keyframes: [
            { boxShadow: '0 0 10px yellow' },
            { boxShadow: '0 0 10px #0f93ff' },
            { boxShadow: '0 0 10px #02cf24' },
            { boxShadow: '0 0 10px pink' },
            { boxShadow: '0 0 10px yellow' },
        ],
        animationOptions: {
            duration: 5000,
            iterations: Infinity,
        }
    });

    useEffect(() => {
        AOS.init();

        // Cleanup function to handle unmounting behavior
        return () => {
            // Pause the animation to prevent the error when unmounting
            if (ContactAnimation?.animation) {
                ContactAnimation.animation.pause();
            }
        };
    }, [ContactAnimation]);

    return (
        <div className='mainBlock' id='mainBlock'>
            <div className='mainBlockSecond'>
                <div className='mainBlockBlock'>

                    <div className='mainBlockTextDiv'
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top">
                        <p className='namePara'>
                            <b>Where creativity</b>
                        </p>

                        <div className='expDiv'>
                            <p className='expPara'>
                                <b>meets technology</b></p>
                        </div>
                        <div className='expDivTxt'>
                            <p className='expParaTxt'>
                                <b style={{ color: "black" }}>Transforming businesses with creativity and exceptional results.</b></p>
                        </div>

                        <a href="#contact" style={{ textDecoration: 'none' }} rel="noreferrer">
                            <div className='githubDiv' ref={ContactAnimation.ref}
                                data-aos="flip-left"
                                data-aos-offset="0"
                                data-aos-delay="2000"
                                data-aos-duration="1000"
                                data-aos-mirror="false"
                                data-aos-once="true"
                                data-aos-anchor-placement="top" >
                                Contact Us
                            </div>
                        </a>

                    </div>

                    <div className='myMainBlockMainDiv'
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top">

                        <div className='myMainBlockDiv'>
                            <div className='myMainBlockExtraDiv'></div>
                            <img src={myMainBlockPic} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default About;
