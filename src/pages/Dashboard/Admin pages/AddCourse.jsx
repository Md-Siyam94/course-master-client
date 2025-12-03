import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../custom hooks/useAxiosSecure';




const img_hosting_key = import.meta.env.VITE_img_hosting_key;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`
const AddCourse = () => {
    const axiosSecure = useAxiosSecure()
    const [uploading, setUploading] = useState(false)
      const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
setUploading(true)
        const imageFile = { image: data?.image[0] }
        console.log(imageFile);
        const res = await axiosSecure.post(img_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        console.log(res?.data?.data?.display_url);
        if (res?.data?.success) {
            console.log('hello world');
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
                    {/* material */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Course metarial</span>
                        </label><br />
                        <input type="text" {...register("material")} placeholder="Material name  " className="input input-bordered w-full" />
                        <div>
                            {errors.material?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This field is required !</p>}
                        </div>
                    </div>
                    {/* size */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Course size</span>
                        </label><br />
                        <input type="text" {...register("size")} placeholder="Course size" className="input input-bordered w-full" />
                        <div>
                            {errors.size?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This field is required !</p>}
                        </div>
                    </div>

                    {/* color */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Course color</span>
                        </label><br />
                        <input type="text" {...register("color")} placeholder="Color " className="input input-bordered w-full" />
                        <div>
                            {errors.color?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This field is required !</p>}
                        </div>
                    </div>
                    {/* price & audiance */}
                    <div className="grid grid-cols-2 gap-4 justify-evenly items-center ">
                        {/* price */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label><br />
                            <input type="number" {...register("price")} placeholder="Course price" className="input input-bordered w-full" />
                            <div>
                                {errors.price?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This filed is required !</p>}
                            </div>
                        </div>
                        {/* audiance */}
                        <div>
                            <label className="label">
                                <span className="label-text">Audience</span>
                            </label><br />
                            <select {...register("targetAudience", { required: true })} defaultValue="choose a audience" className="select select-success">
                                <option disabled={true}>choose a audience</option>
                                <option value={"Men"}>Men</option>
                                <option value={"Women"}>Women</option>
                                <option value={"Kids"}>Kids</option>
                            </select>
                        </div>
                    </div>
                    {/* currency */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Currency</span>
                        </label><br />
                        <input type="text" {...register("currency")} placeholder="Currency" className="input input-bordered w-full" />
                        <div>
                            {errors.metarial?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This field is required !</p>}
                        </div>
                    </div>
                   
                    {/* image */}
                    {/* <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Add image</span>
                    </div>
                    <input multiple type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                    <div>
                        {errors.image?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>Please select an Image for package</p>}
                    </div>
                </label> */}

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

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Add image</span>
                        </div>
                        <input multiple type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                        <div>
                            {errors.image?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>Please select an Image for package</p>}
                        </div>
                    </label>
                </fieldset>
            </form>
        </div>
    );
};

export default AddCourse;