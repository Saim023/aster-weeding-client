import React from 'react';
import SectImg from '../../assets/images/background.png';
import './SectionOne.css';

const SectionOne = () => {
    return (
        <div className='mt-5'>
            <div className='section-one-container'>
                <div className='headings'>
                    <h1>You can sign up a time for <span>Wedding Photography</span></h1>
                    <p className='text-center'>Brings Your Hope To Us, We Will Build Your Hope <span className='text-bold'>Like A Dream!!</span></p>
                </div>
                <div>
                    <img src={SectImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SectionOne;