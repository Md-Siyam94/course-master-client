import React from 'react';
import Hero from './Hero';
import Support from './Support';
import Graphic from './Graphic';
import WhyChooseUs from './WhyChooseUs';
import TopCourses from './TopCourses';

const Home = () => {
    return (
        <div className=''>
            <section>
                <Hero></Hero>
            </section>
            <section>
                <TopCourses></TopCourses>
            </section>
            <section>
                <Support></Support>
            </section>
            <section>
                <Graphic></Graphic>
            </section>
            <section>
                <WhyChooseUs></WhyChooseUs>
            </section>
        </div>
    );
};

export default Home;