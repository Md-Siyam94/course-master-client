import React, { useEffect, useState } from 'react';


const AboutUs = () => {
    const [stacks, setStacks] = useState([]);

    useEffect(() => {
        fetch("stack.json")
            .then(res => res.json())
            .then(data => {
                setStacks(data)
            })
    }, [])
    return (
        <div className='py-20 lg:w-10/12 mx-auto  lg:px-20'>
            <div>
                <img className='' src="https://i.ibb.co.com/twkyzqDV/Untitled-Project.jpg" alt="banner" />
                <img className='-mt-20 rounded-full h-48 w-48 object-cover ml-16' src="https://i.ibb.co.com/MxxMj31R/Whats-App-Image-2025-06-29-at-00-45-34-b5bd039c.jpg" alt="Siyams photo" />

            </div>
            <div className='mx-auto px-4'>
                <h1 className='text-lg font-semibold'>Md Siyam</h1>
                <p className='opacity-70'>Hi, I'm Md Siyam from Bangladesh, a passionate Junior MERN Stack Developer. I specialize in building dynamic and user-friendly web applications using modern technologies like MongoDB, Express.js, React.js, and Node.js. Currently, I'm honing my skills in Tailwind CSS, JavaScript, and other front-end and back-end frameworks to deliver high-quality digital solutions.</p>
                <h2 className='font-semibold text-lg text-teal-500 my-4'>Tech Stack</h2>
                <div className='grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 justify-evenly mx-auto'>
                    {
                        stacks?.map(stack => <div key={stack?._id} className='grid justify-center my-4'>
                            <img className='h-20 w-20 rounded-full object-cover' src={stack?.stackURL} alt="" />
                            <h2 className='text-center'>{stack?.name}</h2>
                        </div>)
                    }
                </div>
         
            </div>
        </div>
    );
};

export default AboutUs;