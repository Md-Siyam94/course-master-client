import React from 'react';
import { Link } from 'react-router-dom';
import banner from "../../assets/bannerImg.jpg"
import PrimaryButton from '../../components/shared/PrimaryButton';
import SectionHeading from '../../components/shared/SectionHeading';

const Hero = () => {
    return (
        <div className='lg:h-screen  lg:flex items-center  justify-between '>
            <div className='flex-1 mx-24'>
                <SectionHeading heading={"Learn Form Our Experts"} title={"Experience a learning platform that take you next level"} style={"items-start lg:text-6xl text-start"}></SectionHeading>
                <PrimaryButton btnText={"Get Started"} to={"/our-courses"} style={"justify-start -mt-12"}></PrimaryButton>
            </div>
            <div className='flex-1 hidden lg:block'>
                <img className='w-full rounded-l-full' src={banner} alt="learning banner" />
            </div>

        </div>
    );
};

export default Hero;