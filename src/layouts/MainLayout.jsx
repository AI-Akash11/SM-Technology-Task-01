import React from 'react';
import LandingPage from '../pages/LandingPage';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <LandingPage/>
            <Footer/>
        </div>
    );
};

export default MainLayout;