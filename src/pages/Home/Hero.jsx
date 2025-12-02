import React from 'react';
import { Link } from 'react-router-dom';
import banner from "../../assets/shikho-banner.png"

const Hero = () => {
    return (
        <div className='max-h-[calc(100vh-30vh)] mx-auto lg:px-28 lg:flex items-center '>
            <div className='flex-1 '>
                <h1 className='lg:text-7xl md:text-5xl text-3xl font-semibold '>Let's kick start your carere with us</h1>
                <p className='opacity-60 my-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quidem hic accusantium tempore repellat unde alias dolores velit dicta distinctio.</p>
                <button className='py-2 px-5 rounded-full text-white bg-teal-600 hover:bg-teal-700 '><Link>See courses</Link></button>
            </div>
            <div className='flex-1 hidden lg:block'>
            <img className='' src={banner} alt="learning banner" />
            </div>
            
        </div>
    );
};

export default Hero;