import React, { useContext, useEffect, useState } from 'react';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { AuthContex } from '../../../provider/AuthProvider';
import useUser from '../../../custom hooks/useUser';
import useIsAdmin from '../../../custom hooks/useIsAdmin';
import useAxiosSecure from '../../../custom hooks/useAxiosSecure';

const Profile = () => {
const [isAdmin] = useIsAdmin()
    const axiosSecure = useAxiosSecure()
    const [userInfo] = useUser({})
    const [states, setStates]= useState({})
    useEffect(()=>{
        axiosSecure.get("/admin-states")
        .then(res=>{
            setStates(res.data)
        })
    },[axiosSecure])
    console.log(states);
    return (
        <div className='px-6'>
            <h1 className='text-lg'>Welcome <span className='font-semibold'> {userInfo?.name}</span></h1>

            <div className='p-10 bg-base-100  rounded-2xl h-full flex gap-6 shadow my-5'>
                <div className=''>
                    <img className='h-24 w-24 rounded-full object-cover  ' src={userInfo?.photoURL} alt="user photo" />

                </div>

                <div >
                    <h2 className='font-semibold text-lg'>{userInfo?.displayName}</h2>
                    <p className='opacity-60'>{userInfo?.email}</p>
                    <p className='opacity-60 text-sm flex gap-2 my-2'><span >{userInfo?.role}</span></p>
                </div>
            </div>
            {
                isAdmin &&  <div className='grid grid-cols-2 px-20  justify-evenly items-center gap-5 my-10 '>
                <div className='text-center p-10 shadow  bg-teal-500 hover:bg-teal-600 text-white rounded-2xl'>
                    <h1 className=' text-lg font-semibold opacity-70'>Published Courses</h1>
                    <p className='text-3xl font-semibold'>{states?.totalCourses}</p>
                </div>
                <div className='text-center p-10  shadow bg-teal-500 hover:bg-teal-600 text-white  rounded-2xl'>
                    <h1 className=' text-lg font-semibold opacity-70'> Students</h1>
                    <p className='text-3xl font-semibold' >{states?.totalUsers} +</p>
                </div>
               
            </div>
            }
           
        </div>
    );
};

export default Profile;