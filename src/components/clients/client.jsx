import React, { useEffect } from "react";
import './client.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

function Clients() {
    let Clients = [
        { clientName: 'Ben Anderson', discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti non asperiores sint dolor, atque, repellendus ut totam aliquid beatae ad maxime itaque rem! At officiis et iure commodi fugit quod." },
        { clientName: 'Ben Anderson', discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti non asperiores sint dolor, atque, repellendus ut totam aliquid beatae ad maxime itaque rem! At officiis et iure commodi fugit quod." },
        { clientName: 'Ben Anderson', discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti non asperiores sint dolor, atque, repellendus ut totam aliquid beatae ad maxime itaque rem! At officiis et iure commodi fugit quod." },
        { clientName: 'Ben Anderson', discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti non asperiores sint dolor, atque, repellendus ut totam aliquid beatae ad maxime itaque rem! At officiis et iure commodi fugit quod." },
        { clientName: 'Ben Anderson', discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti non asperiores sint dolor, atque, repellendus ut totam aliquid beatae ad maxime itaque rem! At officiis et iure commodi fugit quod." },
        { clientName: 'Ben Anderson', discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti non asperiores sint dolor, atque, repellendus ut totam aliquid beatae ad maxime itaque rem! At officiis et iure commodi fugit quod." },
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
        <div className='mainClient' id='Client'>
            <div className='clientSecondDiv'>
                <div className='clientHeadDiv'>
                    <h1 className='clientHead'
                        data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-delay="0"
                        data-aos-duration="1000"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top">Feedback</h1>
                </div>
                <div className='myClientDiv'>
                    <div className='myClientSecondDiv'
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="0"
                        data-aos-duration="1000"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top">
                        {
                            Clients.map((val, index) => {
                                return (
                                    <div className="my_client" key={index}>
                                        <div className="extra_div_my_client"></div>
                                        <div className='my_client_second'>
                                            <h2>{val.clientName}</h2>
                                            <p><FaQuoteLeft className='invertedComma' />{val.discription} <FaQuoteRight className='invertedComma' /></p>
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

export default Clients;
