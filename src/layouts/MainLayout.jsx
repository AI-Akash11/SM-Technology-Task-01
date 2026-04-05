import React from 'react';
import LandingPage from '../pages/LandingPage';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';
import FixedButtons from '../components/Shared/FixedButtons';

const MainLayout = () => {
    return (
        <div className='mx-[15px] xl:mx-5 pt-16'>
            <Navbar/>
            <LandingPage/>
            <Footer/>
            <FixedButtons/>
        </div>
    );
};

export default MainLayout;