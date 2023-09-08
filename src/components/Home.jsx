import React from 'react';
import Banner from './Banner';
import CommonTitle from './CommonTitle';
import Instractor from './Instractor';
import PopularClass from '../pages/PopularClass';
import Banner2 from './Banner2';
import Discount from './Discount';
import CourseDemo from './CourseDemo';
import Gallery from './Gallery';
import Subscribe from './Subscribe';
import Contact from './Contact';
import Partners from './Partners';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Discount />
            <Instractor></Instractor>
            <Partners/>
            <Gallery/>
            <CourseDemo/>
            <Banner2></Banner2>
            <PopularClass></PopularClass>
            <Subscribe/>
            <Contact/>
        </div>
    );
};

export default Home;