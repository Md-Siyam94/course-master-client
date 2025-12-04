
import  { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Swal from 'sweetalert2';
import useAxiosSecure from '../../../custom hooks/useAxiosSecure';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../../../custom hooks/useAxiosPublic';


const UpdateCourse = () => {
    const params = useParams()
     const axiosSecure = useAxiosSecure();
     const axiosPublic = useAxiosPublic();
     const [course, setCourse] = useState({})
    const [error, setError] = useState("");
    const [uploading, setUploading] = useState(false);
    const [modules, setModules] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // get course data
    useEffect(() => {
            axiosPublic.get(`/courses/${params?.id}`)
                .then(res => {
                    setCourse(res.data)
                })
        }, [axiosPublic,])

    // submit modules
    const handleModulesSubmit = (e) => {
        e.preventDefault();

        const form = e.target
        const videoTitle = form.videoTitle.value
        const videoUrl = form.videoUrl.value

        setModules([...modules, { videoTitle, videoUrl }])
        
        form.reset()
    }

    // submit form data
    const onSubmit = async (data) => {
        setError("")
        setUploading(true)
     
            const courseInfo = {
                title: data?.title,
                thumbnail: course?.thumbnail,
                instructor: data?.instructor,
                price: data?.price,
                description: data?.description,
                batch: data?.batch,
                syllabus: data.syllabus ? data.syllabus.split(",") : [],
                modules: modules,
            }
            console.log(courseInfo);
            if (modules.length === 0) {
                setUploading(false)
                setError("Please increase atleast 1 module")
                return;
            }
            axiosSecure.patch(`/courses/update/${params?.id}`, courseInfo)
                .then(res => {
                    console.log(res.data);
                    if (res?.data?.success) {
                        setUploading(false)
                        reset()
                        setModules([]);
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Course has been updated",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
                

       
    }
    return (
         <div className=" grid grid-cols-12 gap-8">
            <form onSubmit={handleSubmit(onSubmit)} className=" rounded-xl p-10 col-span-7 bg-base-100 ">
                <fieldset className="fieldset">
                    {/* <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" /> */}

                    {/* Course name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Course Name</span>
                        </label><br />
                        <input type="text" {...register("title", { required: true })} defaultValue={course?.title} placeholder="Course title" className="input input-bordered w-full" />
                       
                    </div>

                    {/* instructor */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor name</span>
                        </label><br />
                        <input type="text" defaultValue={course?.instructor} {...register("instructor", { required: true })} placeholder="Instructor name" className="input input-bordered w-full" />
                       
                    </div>
                    {/* batch */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Batch no</span>
                        </label><br />
                        <input type="number" defaultValue={course?.batch} {...register("batch", { required: true })} placeholder="Batch" className="input input-bordered w-full" />
                        
                    </div>
                    {/* price */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Course price</span>
                        </label><br />
                        <input type="text" defaultValue={course?.price} {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full" />
                      
                    </div>
                    {/* syllabus */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Course syllabus</span>
                        </label><br />
                        <input type="text" defaultValue={course?.syllabus?.join(",")} {...register("syllabus", { required: true })} placeholder="Write syllabus " className="input input-bordered w-full" />
                       
                    </div>
                    
                    {/* description */}
                    <label className="form-control my-2">
                        <div className="label">
                            <span className="label-text">Description</span>
                        </div><br />
                        <textarea defaultValue={course?.description} {...register("description", { required: true })} className="textarea textarea-bordered h-24 w-full" placeholder="Write about Course" ></textarea>
                        
                    </label>
                    <p className=' text-red-500'>{error}</p>

                    <div>
                        <button className="btn bg-teal-600 hover:bg-teal-700 py-2 rounded-full text-white mt-8">
                            {
                                uploading ? "Updating..." : "Update Course"
                            }
                        </button>
                    </div>
                </fieldset>
            </form>
            <form onSubmit={handleModulesSubmit} className=" bg-base-100 rounded-xl p-10 col-span-5">
                {/* video title */}
                <div className="form-control my-2">
                    <label className="label">
                        <span className="label-text">Video title</span>
                    </label><br />
                    <input type="text" name='videoTitle' placeholder="Video title" className="input input-bordered w-full" />

                </div>
                {/* video url */}
                <div className="form-control my-2">
                    <label className="label">
                        <span className="label-text">Youtube embadded video url</span>
                    </label><br />
                    <input type="url" name="videoUrl" placeholder="Youtube video url" className="input input-bordered w-full" />

                </div>

                <div className="form-control mt-6">
                    <button className="btn rounded-full  bg-teal-600 hover:bg-teal-700 text-white">Add modules</button>
                </div>

                <div>
                    <p className='font-semibold text-lg mt-6'>Total modules: {course?.modules?.length + modules.length}</p>
                </div>

            </form>
        </div>
    );
};

export default UpdateCourse;