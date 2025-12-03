import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../custom hooks/useAxiosSecure';




const img_hosting_key = import.meta.env.VITE_img_hosting_key;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`
const AddCourse = () => {
    const axiosSecure = useAxiosSecure()
    const [uploading, setUploading] = useState(false)
    const [modules, setModules] = useState([])
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        setUploading(true)
        const imageFile = { image: data?.image[0] }
        // console.log(imageFile);
        const res = await axiosSecure.post(img_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        // console.log(res?.data?.data?.display_url);
        if (res?.data?.success) {
            const courseInfo = {
                title: data?.title,
                thumbnail: res?.data?.data?.display_url,
                instructor: data?.instructor,
                price: data?.price,
                description: data?.description,
                batch: data?.batch,
                syllabus: data.syllabus ? data.syllabus.split(",") : [],
                // modules: 
            }
            console.log(courseInfo);
             axiosSecure.post('/courses', courseInfo)
                .then(res => {
                    console.log(res.data);
                    if (res?.data?.success) {
                        setUploading(false)
                        reset()
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
                        <input type="text" {...register("title")} placeholder="Course title" className="input input-bordered w-full" />
                        <div>
                            {errors.title?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This field is required !</p>}
                        </div>
                    </div>

                    {/* instructor */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor name</span>
                        </label><br />
                        <input type="text" {...register("instructor")} placeholder="Instructor name" className="input input-bordered w-full" />
                        <div>
                            {errors.instructor?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This field is required !</p>}
                        </div>
                    </div>
                    {/* batch */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Batch no</span>
                        </label><br />
                        <input type="number" {...register("batch")} placeholder="Batch" className="input input-bordered w-full" />
                        <div>
                            {errors.batch?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This field is required !</p>}
                        </div>
                    </div>
                    {/* price */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Course price</span>
                        </label><br />
                        <input type="text" {...register("price")} placeholder="Price" className="input input-bordered w-full" />
                        <div>
                            {errors.price?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This field is required !</p>}
                        </div>
                    </div>
                    {/* syllabus */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Course syllabus</span>
                        </label><br />
                        <input type="text" {...register("syllabus")} placeholder="Write syllabus " className="input input-bordered w-full" />
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
                        <textarea {...register("description")} className="textarea textarea-bordered h-24 w-full" placeholder="Write about Course" ></textarea>
                        <div>
                            {errors.description?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This field is required !</p>}
                        </div>
                    </label>

                    <div>
                        <button className="btn btn-info text-white mt-8">
                            {
                                uploading ? "Uploading..." : "Uploade Course"
                            }
                        </button>
                    </div>
                </fieldset>
            </form>
            <form onSubmit={handleSubmit(onSubmit)} className=" bg-base-100 rounded-xl p-10 col-span-5">
                <fieldset className="fieldset">

                    {/* <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Add image</span>
                        </div>
                        <input multiple type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                        <div>
                            {errors.image?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>Please select an Image for package</p>}
                        </div>
                    </label> */}
                </fieldset>
            </form>
        </div>
    );
};

export default AddCourse;