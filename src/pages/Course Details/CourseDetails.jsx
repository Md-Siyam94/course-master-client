import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData()
    const {title, description, price, instructor, thumbnail, syllabus, modules} = course || {}
    return (
        <div className='py-32 h-[calc(100vh-90px)] lg:w-11/12 lg:px-20 shadow mx-auto grid lg:grid-cols-5 grid-cols-1 gap-6'>
            <div className='col-span-2 ' >
                <img className='h-72  object-fill' src={thumbnail} alt="" />
            </div>
            <div className='col-span-3'>
                <h1 className='text-lg mb-3 font-semibold'>{title}</h1>
                <p className='opacity-60'>{description}</p>
                <p className='my-3  font-semibold '><span className='opacity-60'>Istructor:</span> <span className='text-lg text-teal-600'>{instructor}</span></p>
                <p><span className='opacity-60'>Syllabus:</span> {syllabus.join(",")}</p>
                <p className='my-3'><span className='opacity-60'>Total classes:</span> {modules.length}</p>
                <p className='text-xl font-semibold opacity-75 ml-4'>{price} TK</p>
                <button className='py-3 cursor-pointer mt-6 px-6 rounded-full font-semibold bg-teal-600 hover:bg-teal-700 text-white'>Enroll Now</button>
            </div>
        </div>
    );
};

export default CourseDetails;