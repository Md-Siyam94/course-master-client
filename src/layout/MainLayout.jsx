import React from 'react';
import Navbar from '../components/shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer';

const MainLayout = () => {
    return (
        <div className='min-h-[calc(100vh-130px)]'>
            <header className='max-h-screen-2xl'>
                <Navbar></Navbar>
            </header>
            <main className='min-h-[calc(100vh-130px)]'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;