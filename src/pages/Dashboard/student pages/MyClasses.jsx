import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../custom hooks/useAxiosSecure';
import useUser from '../../../custom hooks/useUser';
import { AuthContex } from '../../../provider/AuthProvider';
import useGetMyClasses from '../../../custom hooks/useGetMyClasses';
import { Link } from 'react-router-dom';

const MyClasses = () => {
    const { user } = useContext(AuthContex)
    const axiosSecure = useAxiosSecure()
    const [enrolleds] = useGetMyClasses([])
    console.log(enrolleds);

    return (
        <div className='px-6'>
            <h1 className='lg:text-2xl text-xl font-semibold'>Welcome back <span className='text-teal-500'>{user?.name}</span>, ready for your next lesson?</h1>
            <div className='lg:px-10 px-6'>
                {
                    enrolleds?.length === 0 ? <div>
                        <h1 className='text-2xl font-semibold text-center mt-96'>Have not Enrolled any course!</h1>
                    </div> : <div className='grid grid-cols-1 '>
                        {
                            enrolleds?.map((enrolled, index) => <div className='py-20 border-b-2  border-gray-300' key={index}>
                                <div className="card card-side bg-base-100 shadow-sm">
                                    <figure>
                                        <img
                                            className='h-52 w-96 rounded-2xl'
                                            src={enrolled?.thumbnail}
                                            alt="thumbnail" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-2xl">{enrolled?.title}</h2>
                                        <p className='text-lg font-semibold '>Instructor : {enrolled?.instructor}</p>
                                        <div className="card-actions ">
                                            <Link to={`/dashboard/my-classes/${enrolled?.courseId}`} className="py-2 px-6 cursor-pointer rounded-full font-semibold bg-teal-600 hover:bg-teal-700 text-white text-lg">Continue</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default MyClasses;