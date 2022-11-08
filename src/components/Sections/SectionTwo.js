import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './SectionTwo.css';
import SectImg1 from '../../assets/images/wedding-9.jpg';
import SectImg2 from '../../assets/images/wedding-15.jpg';
import SectImg3 from '../../assets/images/wedding-13.jpg';

const SectionTwo = () => {
    return (
        <div className='mt-5'>
            <div className='section-two-container'>
                <div className='w-50'>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={SectImg1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={SectImg2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={SectImg3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div>
                    <h1>left side</h1>
                    <h1>left side</h1>
                    <h1>left side</h1>
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;