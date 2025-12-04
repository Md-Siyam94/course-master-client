import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

import useUser from '../../custom hooks/useUser';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../custom hooks/useAxiosPublic';

const CourseDetails = () => {
    const [userInfo] = useUser()
    const [loading, setLoading] = useState(false)
    const axiosPublic = useAxiosPublic()
    const [course, setCourse] = useState({})
    const params = useParams()
    useEffect(() => {
        axiosPublic.get(`/courses/${params?.id}`)
            .then(res => {
                setCourse(res.data)
            })
    }, [axiosPublic,])
    const { title, description, price, instructor, thumbnail, batch, syllabus, modules, _id } = course || {}


    // Enroll course
    const handleEnroll = (e) => {
        e.preventDefault()
        setLoading(true)
        console.log("enroll course");
        const enrollmentInfo = {
            userName: userInfo?.name,
            email: userInfo?.email,
            courseId: _id,
            title: title,
            description: description,
            batch: batch,
            price: price,
            instructor: instructor,
            thumbnail: thumbnail,
        }
        // console.log(enrollmentInfo);
        axiosSecure.post('/enrolled-courses', enrollmentInfo)
            .then(res => {
                if (res.data?.success) {
                    setLoading(false)
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Successfully enrolled",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    const modal = document.getElementById(_id);
                    if (modal) {
                        modal.close();
                    }
                } else if (res.data?.message) {
                     Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: `${res.data?.message}`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                     const modal = document.getElementById(_id);
                    if (modal) {
                        modal.close();
                    }
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className='py-32 h-[calc(100vh-90px)] lg:w-11/12 lg:px-20 shadow mx-auto grid lg:grid-cols-5 grid-cols-1 gap-6'>
            <div className='col-span-2 ' >
                <img className='h-72  object-fill' src={thumbnail} alt="" />
            </div>
            <div className='col-span-3'>
                <h1 className='text-lg mb-3 font-semibold'>{title}</h1>
                <p className='opacity-60'>{description}</p>
                <p className='my-3  font-semibold '><span className='opacity-60'>Istructor:</span> <span className='text-lg text-teal-600'>{instructor}</span></p>
                <p><span className='opacity-60'>Syllabus:</span> {syllabus?.join(",")}</p>
                <p className='my-3'><span className='opacity-60'>Total classes:</span> {modules?.length}</p>
                <p className='text-xl font-semibold opacity-75 ml-4'>{price} TK</p>
                <button onClick={() => document.getElementById(_id).showModal()} className='py-3 cursor-pointer mt-6 px-6 rounded-full font-semibold bg-teal-600 hover:bg-teal-700 text-white'>Enroll Now</button>
            </div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" >open modal</button> */}
            <dialog id={_id} className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h1 className="font-semibold text-center text-lg">Enrolled Now in Batch {batch}</h1>
                    <hr className='my-2' />
                    <h2 className="font-semibold text-center text-lg">Course Name: {title}</h2>
                    <p className=" text-center">Instructor: {instructor}</p>
                    <p className="py-4 text-center">Price: {price} Tk</p>
                    <form onSubmit={handleEnroll}>
                        {/* name */}
                        <label className="label">Name</label>
                        <input type="text" disabled defaultValue={userInfo?.name} className="input w-full" placeholder="Name" />
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="text" disabled defaultValue={userInfo?.email} className="input w-full" placeholder="Name" />

                        <button type='submit' className=' py-2 px-6 cursor-pointer rounded-full font-semibold bg-teal-600 hover:bg-teal-700 text-white'>Enroll Now</button>
                    </form>

                </div>
            </dialog>
        </div>
    );
};

export default CourseDetails;