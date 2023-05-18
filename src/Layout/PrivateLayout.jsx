import React from 'react';
import NavBar from '../Pages/Shared/Navbar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

const PrivateLayout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default PrivateLayout;