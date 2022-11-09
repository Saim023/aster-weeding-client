import React from 'react';
import HomeCarousel from '../../components/Carousel/HomeCarousel';
import SectionOne from '../../components/Sections/SectionOne';
import SectionTwo from '../../components/Sections/SectionTwo';
import Services from '../../Services/Services';

const Home = () => {
    return (
        <div>
            <HomeCarousel></HomeCarousel>
            <div>
                <Services></Services>
            </div>
            <div>
                <SectionTwo></SectionTwo>
            </div>
            <div>
                <SectionOne></SectionOne>
            </div>
        </div>
    );
};

export default Home;