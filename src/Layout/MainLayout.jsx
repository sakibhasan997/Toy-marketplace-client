import React from 'react';
import Home from '../Pages/Home/Home/Home';
import NavBar from '../Pages/Shared/Navbar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Banner from '../Pages/Shared/Banner/Banner';


const MainLayout = () => {
    return (
        <div>
            <div>
                <NavBar />
                <Banner/>
            </div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;