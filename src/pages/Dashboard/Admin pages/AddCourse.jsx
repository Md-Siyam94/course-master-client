import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../custom hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../custom hooks/useAxiosPublic';




const img_hosting_key = import.meta.env.VITE_img_hosting_key;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`
const AddCourse = () => {
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const [error, setError] = useState("")
    const [uploading, setUploading] = useState(false)
    const [modules, setModules] = useState([])
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // set modules
    const handleModulesSubmit = (e) => {
        e.preventDefault();

        const form = e.target
        const videoTitle = form.videoTitle.value
        const videoUrl = form.videoUrl.value

        setModules([...modules, { videoTitle, videoUrl }])
        form.reset()
    }

    // set assignment
    const handleAssignmentSubmit = (e) => {
        e.preventDefault();


        const form = e.target
        const assignment = form.assignment.value
        const mark = form.mark.value
        const existAssignment = modules.find(module=> module.assignment)
        if(existAssignment){
            return setError("module alreadey has an assignment ")
        }

        setModules([...modules, { assignment, mark }])
        form.reset()
    }

    // create and post course
    const onSubmit = async (data) => {
        setError("")
        setUploading(true)
        const imageFile = { image: data?.image[0] }

        const res = await axiosPublic.post(img_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res?.data?.success) {
            const courseInfo = {
                title: data?.title,
                thumbnail: res?.data?.data?.display_url,
                instructor: data?.instructor,
                price: data?.price,
                description: data?.description,
                batch: data?.batch,
                syllabus: data.syllabus ? data.syllabus.split(",") : [],
                modules: modules,
            }
            if (modules.length === 0) {
                setUploading(false)
                setError("Please add atleast 1 module")
                return;
            }
            axiosSecure.post('/courses', courseInfo)
                .then(res => {
                    console.log(res.data);
                    if (res?.data?.success) {
                        setUploading(false)
                        reset()
                        setModules([]);
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Product has been uploaded",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
                .catch(err => {
                    console.log('error from add product', err);
                })

        }
    }

    return (
        <div className=" grid lg:grid-cols-12  gap-8">
            <form onSubmit={handleSubmit(onSubmit)} className=" rounded-xl p-10 col-span-7 bg-base-100 ">
                <fieldset className="fieldset">

                    {/* Course name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Course Name</span>
                        </label><br />
                        <input type="text" {...register("title", { required: true })} placeholder="Course title" className="input input-bordered w-full" />
                        <div>
                            {errors.title?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This field is required !</p>}
                        </div>
                    </div>

                    {/* instructor */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor name</span>
                        </label><br />
                        <input type="text" {...register("instructor", { required: true })} placeholder="Instructor name" className="input input-bordered w-full" />
                        <div>
                            {errors.instructor?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This field is required !</p>}
                        </div>
                    </div>
                    {/* batch */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Batch no</span>
                        </label><br />
                        <input type="number" {...register("batch", { required: true })} placeholder="Batch" className="input input-bordered w-full" />
                        <div>
                            {errors.batch?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This field is required !</p>}
                        </div>
                    </div>
                    {/* price */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Course price</span>
                        </label><br />
                        <input type="text" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full" />
                        <div>
                            {errors.price?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This field is required !</p>}
                        </div>
                    </div>
                    {/* syllabus */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Course syllabus</span>
                        </label><br />
                        <input type="text" {...register("syllabus", { required: true })} placeholder="Write syllabus " className="input input-bordered w-full" />
                        <div>
                            {errors.syllabus?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This field is required !</p>}
                        </div>
                    </div>
                    {/* image */}
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Thumbnail</span>
                        </div>
                        <input multiple type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                        <div>
                            {errors.image?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>Please select an Image for course</p>}
                        </div>
                    </label>
                    {/* description */}
                    <label className="form-control my-2">
                        <div className="label">
                            <span className="label-text">Description</span>
                        </div><br />
                        <textarea {...register("description", { required: true })} className="textarea textarea-bordered h-24 w-full" placeholder="Write about Course" ></textarea>
                        <div>
                            {errors.description?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This field is required !</p>}
                        </div>
                    </label>
                    <p className=' text-red-500'>{error}</p>

                    <div>
                        <button className="btn bg-teal-600 hover:bg-teal-700 py-2 rounded-full text-white mt-8">
                            {
                                uploading ? "Uploading..." : "Uploade Course"
                            }
                        </button>
                    </div>
                </fieldset>
            </form>
            <div className='col-span-5 w-full py-10'>
                {/* modules form */}
                <form onSubmit={handleModulesSubmit} className=" bg-base-100 rounded-xl px-10 ">
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
                        <p className='font-semibold text-lg mt-6'>Total module: {modules.length}</p>
                    </div>

                </form>
                {/* assingment form */}
                <form onSubmit={handleAssignmentSubmit} className=" bg-base-100 rounded-xl px-10 ">
                    {/* assignment title */}
                    <div className="form-control my-2">
                        <label className="label">
                            <span className="label-text">Assignment title</span>
                        </label><br />
                        <input type="text" name='assignment' placeholder="Assignment title" className="input input-bordered w-full" />

                    </div>
                    {/* assignment mark */}
                    <div className="form-control my-2">
                        <label className="label">
                            <span className="label-text">Assignment mark</span>
                        </label><br />
                        <input type="number" name="mark" placeholder="Assignment mark" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn rounded-full  bg-teal-600 hover:bg-teal-700 text-white">Add Assignment</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCourse;