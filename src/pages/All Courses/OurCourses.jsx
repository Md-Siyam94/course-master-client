import React, { useEffect, useState } from 'react';
import useCourses from '../../custom hooks/useCourses';
import { ReactTyped } from 'react-typed';
import CourseCard from '../../components/CourseCard';
import axios from 'axios';
import useAxiosPublic from '../../custom hooks/useAxiosPublic';

const OurCourses = () => {
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState(false)
    const axiosPublic = useAxiosPublic()
    const [courses, setCourses] = useState([])
    console.log(search);
    useEffect(() => {
        axiosPublic.get(`/courses/search?q=${search}&sort=${sort}`)
            .then(res => {
                setCourses(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [axiosPublic, search])
    return (
        <div className='py-24 lg:w-11/12 lg:px-20 px-6 mx-auto '>
            <div className='lg:flex justify-evenly'>
                <label className="flex flex-row-reverse lg:w-lg w-sm mx-auto py-2 border rounded-full items-center px-5 border-green-500">
                    <svg className="h-[1em] opacity-50 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <ReactTyped

                        attr="placeholder"
                        fadeOut={true}
                        fadeOutDelay={0}
                        onBegin={function noRefCheck() { }}
                        onComplete={function noRefCheck() { }}
                        onDestroy={function noRefCheck() { }}
                        onLastStringBackspaced={function noRefCheck() { }}
                        onReset={function noRefCheck() { }}
                        loop={true}

                        onStringTyped={function noRefCheck() { }}
                        onTypingPaused={function noRefCheck() { }}
                        onTypingResumed={function noRefCheck() { }}
                        strings={[
                            'Search: web development',
                            'Search: graphic design',
                            'Search: spoken english',
                            'Search: digital marketing',
                            'Search: ui/ux design',

                        ]}
                        typeSpeed={100}
                        typedRef={function noRefCheck() { }}
                    >
                        <input
                            className='focus:outline-0 w-md'
                            type="search"
                            placeholder="Search products..."
                            onChange={e => setSearch(e.target.value)}
                        />
                    </ReactTyped>

                </label>
                <div className='hidden lg:block'>
                    <button onClick={() => setSort(sort === "asc" ? "desc" : "asc")} className='py-2 px-6 rounded-full font-semibold bg-teal-600 hover:bg-teal-700 text-white'>{
                        sort? "Sorted by Price": "Sort by price"
                    }</button>
                </div>
            </div>
            {/* map courses */}
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 justify-evenly '>
                {
                    courses.map(course => <CourseCard key={course?._id} course={course}></CourseCard>)
                }
            </div>

        </div >
    );
};

export default OurCourses;