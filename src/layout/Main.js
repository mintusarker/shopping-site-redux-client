import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../share/Footer';

import Navbar from '../share/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;