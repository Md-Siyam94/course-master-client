import React from 'react';

const AdminProfile = () => {
    return (
        <div >
                   <h1 className='text-lg'>Welcome <span className='font-semibold'> {user?.displayName}</span></h1>
       
                   <div className='p-10 bg-base-100  rounded-2xl h-full flex gap-6 shadow my-5'>
                       <div className=''>
                           <img className='h-24 w-24 rounded-full object-cover  ' src={user?.photoURL} alt="user photo" />
       
                       </div>
       
                       <div >
                           <h2>{user?.displayName}</h2>
                           <p>{user?.email}</p>
                           <p className='opacity-60 text-sm flex gap-2 my-2'><MdOutlineAdminPanelSettings className='text-xl' /> <span >{user?.role}</span></p>
                       </div>
                   </div>
                   <div className='grid grid-cols-4 justify-evenly items-center gap-5 my-10 '>
                       <div className='text-center bg-base-100 p-4 shadow rounded-2xl'>
                           <h1 className=' '>Published Courses</h1>
                           <p className='text-xl font-semibold'>6</p>
                       </div>
                       <div className='text-center bg-base-100 p-4  shadow rounded-2xl'>
                           <h1 className=' '> Students</h1>
                           <p className='text-xl font-semibold' >685 +</p>
                       </div>
                       <div className='text-center bg-base-100 p-4  shadow rounded-2xl'>
                           <h1 className=' '>to</h1>
                           <p className='text-xl font-semibold'>7</p>
                       </div>
                       <div className='text-center bg-base-100 p-4  shadow rounded-2xl'>
                           <h1 className=' '>Reviews</h1>
                           <p className='text-xl font-semibold'>25</p>
                       </div>
                   </div>
               </div>
    );
};

export default AdminProfile;