import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './SectionTwo.css';
import SectImg1 from '../../assets/images/wedding-9.jpg';
import SectImg2 from '../../assets/images/wedding-15.jpg';
import SectImg3 from '../../assets/images/wedding-13.jpg';
import SectImg4 from '../../assets/images/wedding-12.jpg';
import SectImg5 from '../../assets/images/wedding-1.jpg';
import SectImg6 from '../../assets/images/wedding-2.jpg';
import SectImg7 from '../../assets/images/wedding-3.jpg';
import SectImg8 from '../../assets/images/wedding-4.jpg';
import SectImg9 from '../../assets/images/wedding-5.jpg';
import SectImg10 from '../../assets/images/wedding-6.jpg';
import SectImg11 from '../../assets/images/wedding-7.jpg';
import Video2 from '../../assets/images/video3.mp4';

const SectionTwo = () => {
    return (
        <div className='mt-5'>
            <div className='section-two-container'>
                <div className='w-50 xs:d-none sm:d-none'>
                    <video src={Video2} autoPlay width='100%' controls loop></video>
                </div>
                <div className='right-sect '>
                    <img src={SectImg4} alt="" />
                    <img src={SectImg5} alt="" />
                    <img src={SectImg6} alt="" />
                    <img src={SectImg7} alt="" />
                    <img src={SectImg8} alt="" />
                    <img src={SectImg9} alt="" />
                    <img src={SectImg10} alt="" />
                    <img src={SectImg11} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;