import React from 'react';
import Hero from './Hero';
import Support from './Support';

const Home = () => {
    return (
        <div className=''>
            <section>
                <Hero></Hero>
            </section>
            <section>
                <Support></Support>
            </section>
        </div>
    );
};

export default Home;