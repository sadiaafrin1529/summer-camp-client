import React from 'react';
import Banner from './Banner';
import CommonTitle from './CommonTitle';
import Instractor from './Instractor';
import PopularClass from '../pages/PopularClass';
import Banner2 from './Banner2';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <Instractor></Instractor>
            <Banner2></Banner2>
            <PopularClass></PopularClass>
        </div>
    );
};

export default Home;