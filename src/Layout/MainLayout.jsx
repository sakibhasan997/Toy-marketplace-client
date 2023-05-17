import React from 'react';
import Home from '../Pages/Home/Home/Home';
import NavBar from '../Pages/Shared/Navbar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;