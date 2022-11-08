import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import wedding14 from '../../assets/images/wedding-14.jpg';
import wedding1 from '../../assets/images/wedding-1.jpg';
import wedding10 from '../../assets/images/wedding-10.jpg';
import './HomeCarousel.css';

const HomeCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-img"
                    src={wedding14}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Your Dream Becomes True!!</h3>
                    <p>Make Your Dream Today</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-img"
                    src={wedding10}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Promise Your Love One</h3>
                    <p>And We Can Promise You With Our Service.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-img"
                    src={wedding1}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Your Dream, Our Plan</h3>
                    <p>
                        Let's Make Your Dream Today!
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default HomeCarousel;