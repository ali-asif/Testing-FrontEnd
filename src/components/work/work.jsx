import React, { useEffect } from "react";
import './work.css'
import { FaCss3Alt, FaHtml5, FaReact, FaGithub, FaNodeJs } from 'react-icons/fa'
import { SiFirebase, SiJavascript, SiRedux, SiTypescript, SiMaterialui, SiGraphql, SiMongodb, SiExpress, SiNextdotjs, SiTailwindcss, SiOpenai } from 'react-icons/si'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Work() {
    let Works = [
        { workName: 'HTML'},
        { workName: 'CSS'},
        { workName: 'JAVASCRIPT'},
        { workName: 'REACTJS'},
        { workName: 'TYPESCRIPT'},
        { workName: 'NEXTJS'},
        { workName: 'TAILWIND CSS'},
        { workName: 'PYTHON'},
        { workName: 'C++'},
    ]
    useEffect(() => {
        AOS.init({
            duration: 1500,
            easing: 'ease-in-out',
            once: true,
            mirror: true,
            anchorPlacement: 'top-bottom',
        });
    }, [])

    return (
        <div className='mainWork' id='works'>
            <div className='workSecondDiv'>
                <div className='workHeadDiv'>
                    <h1 className='workHead'
                        data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-delay="0"
                        data-aos-duration="1000"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top">Technology Tech</h1>
                    
                </div>
                <div className='myWorkDiv'>
                    
                    <div className='myWorkSecondDiv'
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="0"
                        data-aos-duration="1000"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top">
                        {
                            Works.map((val, index) => {
                                return (
                                    // <div className='skillsGraphDiv' key={index} >
                                    //     <div className='skillsGraphHeadDiv'>
                                    //         <div className='skillsGraphHead'>{val.skillName} {val.icon}</div>
                                    //         <div className='skillsGraphPercentage'>{val.percentage}%</div>
                                    //     </div>
                                    //     <div className='skillsBaseDiv'>
                                    //         <div className={val.class}></div>
                                    //     </div>
                                    //     <div className='skillsLevelDiv'>
                                    //         <div>Basic</div>
                                    //         <div>Intermediate</div>
                                    //         <div>Expert</div>
                                    //     </div>
                                    // </div>
                                    <div className="my_work ">
                                        <div className="extra_div_my_work"></div>
                                        <div className='my_work_second'>{val.workName} {val.icon}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Work