import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='max-h-[calc(100vh-30vh)] lg:px-28'>
            <div>
                <h1>Let's kick start your carere with us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quidem hic accusantium tempore repellat unde alias dolores velit dicta distinctio.</p>
                <button><Link>See courses</Link></button>
            </div>
            <div>
            
            </div>
            
        </div>
    );
};

export default Hero;