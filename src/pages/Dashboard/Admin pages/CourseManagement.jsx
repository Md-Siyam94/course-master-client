import React from 'react';
import { FaPlus } from 'react-icons/fa6';
import useCourses from '../../../custom hooks/useCourses';
import CourseCard from '../../../components/CourseCard';
import { Link } from 'react-router-dom';

const CourseManagement = () => {
    const [courses, refetch] = useCourses([])
    return (
        <div>
            <div className='w-full mx-auto flex justify-end'>
                <button className='py-3  cursor-pointer mt-6 px-6 rounded-full font-semibold bg-teal-600 hover:bg-teal-700 text-white flex gap-2 items-center '><FaPlus className='text-2xl' /><Link to={"/dashboard/add-course"} >Add Course</Link></button>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 justify-evenly '>
                {
                    courses.map(course=> <CourseCard key={course?._id} refetch={refetch} course={course}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default CourseManagement;