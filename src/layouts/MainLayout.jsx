import React from 'react';
import LandingPage from '../pages/LandingPage';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';

const MainLayout = () => {
    return (
        <div className='mx-[15px] xl:mx-5'>
            <Navbar/>
            <LandingPage/>
            <Footer/>
        </div>
    );
};

export default MainLayout;