import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdOutlineLogin } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import GoogleLogin from '../../components/shared/GoogleLogin';
import { AuthContex } from '../../provider/AuthProvider';
import useAxiosPublic from '../../custom hooks/useAxiosPublic';


const Singup = () => {
    const [error, setError] = useState("")
    const { singUpUser, updateUserProfile } = useContext(AuthContex)
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        setError("")
        const name = data?.name;
        const email = data?.email;
        const password = data?.password;


        singUpUser(email, password)
            .then(res => {
                // update user profile
                updateUserProfile({ displayName: name, photoURL: "https://i.ibb.co.com/cMZJGjn/Screenshot-2025-11-27-184724.png" })
                    .then(() => {
                        navigate('/')
                        const userInfo = {
                            name: name,
                            email: email,
                            photoURL: "https://i.ibb.co.com/cMZJGjn/Screenshot-2025-11-27-184724.png",
                            password: password,
                        }
                        axiosPublic.post("/users", userInfo)
                            .then((res) => {

                            })
                            .catch(err => {
                                console.log(err);
                            })
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => {
                if (err.message.slice(16, 50) === "(auth/email-already-in-use).") {
                    setError("This email is already used")
                }
                if (err.message.slice(16, 50) === "(auth/invalid-email).") {
                    setError("Please enter a valid email")
                }
                console.log(err);
            })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content w-11/12 flex-col lg:flex-row">
                <div className="text-center hidden lg:block  lg:text-left">

                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full lg:max-w-md md:max-w-sm py-10 shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-xl text-center font-bold">Sign up</h1>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <fieldset className="fieldset">
                                {/* name */}
                                <label className="label">Name</label>
                                <input type="text" className="input w-full" placeholder="Name" {...register("name", { required: true })} />
                                {errors.name && <span className=' text-red-500'>This field is required</span>}
                                {/* email */}
                                <label className="label">Email</label>
                                <input type="email" className="input w-full" placeholder="Email" {...register("email", { required: true })} />
                                {errors.email && <span className=' text-red-500'>This field is required</span>}
                                {/* password */}
                                <label className="label">Password</label>
                                <input type="password" className="input w-full" placeholder="Password" {...register("password", { required: true, minLength: 6, pattern: "/^[a-zA-Z0-9!@#$%^&*]{6,16}$/" })} />
                                {errors.password?.type === 'required' && <span className=' text-red-500'>Make a strong password!</span>}
                                {errors.password?.type === 'minLength' && <p role="alert" className='text-red-600'>Password must be 6 characters!</p>}

                                <div><a className="link link-hover">Forgot password?</a></div>

                                <p className='text-red-500 mt-1'>{error}</p>
                                <button className="btn bg-teal-600 hover:bg-teal-700 text-white rounded-full mt-4"><MdOutlineLogin className='text-xl' />Sign up</button>
                                <p className='text-center my-2'>Already have an Account ? please <Link to={'/login'} className='text-blue-600 '>Login</Link></p>
                                <div><GoogleLogin></GoogleLogin></div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singup;