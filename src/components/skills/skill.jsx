import React, { useEffect } from "react";
import './skill.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills() {
    let Skills = [
        { skillName: 'Digital marketing', discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti ducimus, explicabo dolore nulla architecto totam nobis quia iusto tempore, beatae minima ipsam eum incidunt voluptas est amet quae delectus saepe." },
        { skillName: 'Digital marketing', discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti ducimus, explicabo dolore nulla architecto totam nobis quia iusto tempore, beatae minima ipsam eum incidunt voluptas est amet quae delectus saepe." },
        { skillName: 'Digital marketing', discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti ducimus, explicabo dolore nulla architecto totam nobis quia iusto tempore, beatae minima ipsam eum incidunt voluptas est amet quae delectus saepe." },
        { skillName: 'Digital marketing', discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti ducimus, explicabo dolore nulla architecto totam nobis quia iusto tempore, beatae minima ipsam eum incidunt voluptas est amet quae delectus saepe." },
        { skillName: 'Digital marketing', discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti ducimus, explicabo dolore nulla architecto totam nobis quia iusto tempore, beatae minima ipsam eum incidunt voluptas est amet quae delectus saepe." },
        { skillName: 'Digital marketing', discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti ducimus, explicabo dolore nulla architecto totam nobis quia iusto tempore, beatae minima ipsam eum incidunt voluptas est amet quae delectus saepe." },
        { skillName: 'Digital marketing', discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti ducimus, explicabo dolore nulla architecto totam nobis quia iusto tempore, beatae minima ipsam eum incidunt voluptas est amet quae delectus saepe." },
        { skillName: 'Digital marketing', discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti ducimus, explicabo dolore nulla architecto totam nobis quia iusto tempore, beatae minima ipsam eum incidunt voluptas est amet quae delectus saepe." },
    ];

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
        <div className='mainSkill' id='skills'>
            <div className='skillSecondDiv'>
                <div className='skillHeadDiv'>
                    <h1 className='skillHead'
                        data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-delay="0"
                        data-aos-duration="1000"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top">What We Offer</h1>
                </div>
                <div className='mySkillsDiv'>
                    <div className='mySkillsSecondDiv'
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="0"
                        data-aos-duration="1000"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top">
                        {
                            Skills.map((val, index) => {
                                return (
                                    <div className="my_skills" key={index}>
                                        <div className="extra_div_my_skills"></div>
                                        <div className='my_skills_second'>
                                            <h3>{val.skillName}</h3>
                                            <p>{val.discription}</p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
