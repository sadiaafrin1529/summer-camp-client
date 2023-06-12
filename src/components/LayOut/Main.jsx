import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Main = () => {
    const location= useLocation();
    const headerFooter = location.pathname.includes('login') || location.pathname.includes('register')

    return (
        <div>
            {headerFooter || <Navbar></Navbar>}
           <Outlet></Outlet>
           {headerFooter ||<Footer></Footer>}
        </div>
    );
};

export default Main;