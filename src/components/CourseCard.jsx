import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import useIsAdmin from '../custom hooks/useIsAdmin';
import useAxiosSecure from '../custom hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const CourseCard = ({ course, refetch }) => {
    const [isAdmin] = useIsAdmin({})
    const axiosSecure = useAxiosSecure()
    const { title, description, price, thumbnail, _id, batch } = course || {}

    // delete course
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/courses/${id}`)
                    .then(res => {
                        if (res.data?.success) {
                            refetch()
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Course has been deleted successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
        });

    }

    return (
        <div className="card bg-base-100  shadow-sm">
            <figure className="px-10 pt-10">
                <img

                    src={thumbnail}
                    alt="thumbnail"
                    className="rounded-xl h-[145px] w-[260px]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p className='opacity-60'>{description}</p>
                <div className='flex  gap-6'>
                    <p className='text-lg font-semibold opacity-55'>Batch {batch}</p>
                    <p className='text-lg opacity-70'>price: {price} Tk</p>
                </div>
                <div className="card-actions items-center gap-5">
                    <button className='py-2 px-6 cursor-pointer rounded-full font-semibold bg-teal-600 hover:bg-teal-700 text-white'><Link to={`/course-details/${_id}`}>See Details</Link></button>
                    {
                        isAdmin && <div className='flex gap-6'>
                            <Link to={`/dashboard/update-course/${_id}`} className='py-2 px-4 cursor-pointer rounded-full font-semibold bg-teal-600 hover:bg-teal-700 text-white'><FaRegEdit className='text-2xl' /></Link>
                            <button onClick={() => handleDelete(_id)} className='py-2 px-4 cursor-pointer rounded-full font-semibold bg-teal-600 hover:bg-teal-700 text-white'><AiOutlineDelete className='text-2xl' /></button>
                        </div>
                    }
                </div>
            </div>

        </div>
    );
};

export default CourseCard;