import React from 'react';
import Navbar from '../components/shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <header className='max-w-screen-2xl mx-auto'>
                <Navbar></Navbar>
            </header>
            <main className='min-h-[calc(100vh-301px)]'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;