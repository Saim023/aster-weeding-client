import React from 'react';
import HomeCarousel from '../../components/Carousel/HomeCarousel';
import Services from '../../Services/Services';

const Home = () => {
    return (
        <div>
            <HomeCarousel></HomeCarousel>
            <div>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;