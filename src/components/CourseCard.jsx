import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import useIsAdmin from '../custom hooks/useIsAdmin';
import useAxiosSecure from '../custom hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Pencil, Trash2 } from 'lucide-react';

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
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <h2 className="text-xs  opacity-60">by Redoan Khandokar</h2>
                <div className=' justify-start flex flex-row-reverse items-center'>
                    <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-lg">
                        Batch {batch}
                    </span>
                    <p className='text-2xl font-semibold text-teal-800 opacity-70'>৳ {price}</p>
                </div>

                <div className="grid grid-cols-2  mt-6 justify-center items-center gap-5">
                    <button className="bg-teal-500 w-full hover:bg-teal-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"><Link to={`/course-details/${_id}`}>Enroll Now</Link></button>
                    <button className="border w-full border-gray-200 hover:border-teal-300 text-gray-600 hover:text-teal-600 text-sm font-medium px-4 py-2 rounded-xl transition-colors"><Link to={`/course-details/${_id}`}>See Details</Link></button>
                </div>
                    {
                        isAdmin && <div className='grid grid-cols-2 gap-2'>

                            <Link to={`/dashboard/update-course/${_id}`} className="p-2 rounded-xl bg-teal-50 text-teal-600 hover:bg-teal-500 w-full grid justify-center hover:text-white transition-colors"
                            >
                                <Pencil size={15} /></Link>
                            <button onClick={() => handleDelete(_id)} className="p-2 rounded-xl bg-rose-50 text-rose-500 w-full hover:bg-rose-500 grid justify-center hover:text-white transition-colors"
                            >
                                <Trash2 size={15} />
                            </button>
                        </div>
                    }
            </div>

        </div>
    );
};

export default CourseCard;