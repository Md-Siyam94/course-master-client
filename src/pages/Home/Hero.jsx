import React from 'react';
import { Link } from 'react-router-dom';
import banner from "../../assets/bannerImg.jpg"
import PrimaryButton from '../../components/shared/PrimaryButton';

const Hero = () => {
    return (
        <div className='lg:h-screen  lg:flex items-center mt-5 justify-between '>
            <div className='flex-1 mx-24'>
                <h1 className='lg:text-5xl md:text-4xl text-3xl font-semibold '>Experience a learning
                    platform that take you
                    next level</h1>
                <p className='opacity-60 my-5 '>Learn industry-standard design tools and unleash your creativity with our comprehensive graphics design course.</p>
                <PrimaryButton btnText={"Get Started"} to={"/our-courses"} style={"justify-start"}></PrimaryButton>
            </div>
            <div className='flex-1 hidden lg:block'>
                <img className='w-full rounded-l-full' src={banner} alt="learning banner" />
            </div>

        </div>
    );
};

export default Hero;