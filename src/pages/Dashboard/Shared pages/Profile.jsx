import React, { useContext } from 'react';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { AuthContex } from '../../../provider/AuthProvider';

const Profile = () => {

    const {user} = useContext(AuthContex)
    return (
        <div >
            <h1 className='text-lg'>Welcome <span className='font-semibold'> {user?.displayName}</span></h1>

            <div className='p-10 bg-base-100  rounded-2xl h-full flex gap-6 shadow my-5'>
                <div className=''>
                    <img className='h-24 w-24 rounded-full object-cover  ' src={user?.photoURL} alt="user photo" />

                </div>

                <div >
                    <h2 className='font-semibold text-lg'>{user?.displayName}</h2>
                    <p className='opacity-60'>{user?.email}</p>
                    <p className='opacity-60 text-sm flex gap-2 my-2'><MdOutlineAdminPanelSettings className='text-xl' /> <span >{user?.role}</span></p>
                </div>
            </div>
            <div className='grid grid-cols-4 justify-evenly items-center gap-5 my-10 '>
                <div className='text-center p-10 shadow  bg-teal-500 hover:bg-teal-600 text-white rounded-2xl'>
                    <h1 className=' text-lg font-semibold opacity-70'>Published Courses</h1>
                    <p className='text-3xl font-semibold'>6</p>
                </div>
                <div className='text-center p-10  shadow bg-teal-500 hover:bg-teal-600 text-white  rounded-2xl'>
                    <h1 className=' text-lg font-semibold opacity-70'> Students</h1>
                    <p className='text-3xl font-semibold' >685 +</p>
                </div>
                <div className='text-center p-10  shadow bg-teal-500 hover:bg-teal-600 text-white  rounded-2xl'>
                    <h1 className=' text-lg font-semibold opacity-70'>to</h1>
                    <p className='text-3xl font-semibold'>7</p>
                </div>
                <div className='text-center p-10  shadow bg-teal-500 hover:bg-teal-600 text-white  rounded-2xl'>
                    <h1 className=' text-lg font-semibold opacity-70'>Reviews</h1>
                    <p className='text-3xl font-semibold'>25</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;