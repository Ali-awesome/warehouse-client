import React from 'react';
import ContactUs from './ContactUs/ContactUs';
import HeroSection from './HeroSection/HeroSection';
import HowItWorks from './HowItWorks/HowItWorks';
import Properties from './Properties/Properties';


const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Properties></Properties>
            <HowItWorks></HowItWorks>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;