import React from 'react';
import LandingPage from '../pages/LandingPage';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';
import FixedButtons from '../components/Shared/FixedButtons';
import CustomCursor from '../components/Shared/CustomCursor';
import Preloader from '../components/Shared/Preloader';

const MainLayout = () => {
    return (
        <div className='mx-[15px] xl:mx-5 pt-16'>
            <Preloader/>
            <Navbar/>
            <CustomCursor/>
            <LandingPage/>
            <Footer/>
            <FixedButtons/>
        </div>
    );
};

export default MainLayout;