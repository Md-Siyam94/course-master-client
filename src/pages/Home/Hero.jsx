import React from 'react';
import { Link } from 'react-router-dom';
import banner from "../../assets/shikho-banner.png"

const Hero = () => {
    return (
        <div className='lg:h-[calc(100vh-100px)] h-[calc(100vh-250px)] mx-auto pt-24 lg:px-28 px-6 lg:flex items-center '>
            <div className='flex-1 '>
                <h1 className='lg:text-7xl md:text-5xl text-3xl font-semibold '>Let's kick start your carere with us</h1>
                <p className='opacity-60 my-5 '>Learn industry-standard design tools and unleash your creativity with our comprehensive graphics design course.</p>
                <button className='py-2 px-5 rounded-full text-white bg-teal-600 hover:bg-teal-700 '><Link to={"/our-courses"}>See courses</Link></button>
            </div>
            <div className='flex-1 hidden lg:block'>
            <img className='' src={banner} alt="learning banner" />
            </div>
            
        </div>
    );
};

export default Hero;