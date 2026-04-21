import { useForm } from "react-hook-form";
import { MdOutlineLogin } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../../components/shared/GoogleLogin";
import { useContext, useState } from "react";
import { AuthContex } from "../../provider/AuthProvider";
import { Eye, EyeOff, EyeOffIcon } from "lucide-react";


const Login = () => {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const { loginUser} = useContext(AuthContex)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        setError("")
        const email = data?.email;
        const password = data?.password;

         loginUser(email, password)
            .then(() => {
                navigate("/")
            })
            .catch(err => {
                if (err?.message.slice(16, 50) === "(auth/invalid-credential).") {
                    setError("Email or password is incorrect")
                }
              
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content w-11/12 ">
            
                <div className="card bg-base-100 md:max-w-sm lg:max-w-md w-full mx-auto py-10 shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-xl text-center font-bold">Login to your account</h1>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <fieldset className="fieldset">
                                {/* email */}
                                <label className="label">Email</label>
                                <input type="email" {...register("email", { required: true })} className="input" placeholder="Email" />
                                {errors.email && <span className=' text-red-500'>This field is required</span>}
                                {/* password */}
                                <label className="label">Password</label>
                                <input type="password"  {...register("password", { required: true })} className="input" placeholder="Password" />
                                {errors.password && <span className=' text-red-500'>This field is required</span>}
                                <div><a className="link link-hover ">Forgot password?</a></div>
                                <p className=' text-red-500'>{error}</p>
                                <button className="btn bg-teal-600 hover:bg-teal-700 text-white rounded-box mt-4"><MdOutlineLogin className='text-xl' />Login</button>
                                <p className='text-center my-2'>Have not any Account ? please <Link to={'/signup'} className='text-blue-600 '>Sign Up</Link></p>
                                <div><GoogleLogin></GoogleLogin></div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
            {/* <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Login to your account</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Username <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {showPassword ? (
                    <Eye size={20} />
                  ) : (
                    <EyeOffIcon size={20} />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 cursor-pointer"
                />
                <span className="text-sm text-gray-700">Remember Me</span>
              </label>
              <a href="#" className="text-sm text-teal-600 hover:text-teal-700 font-medium">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div> */}
        </div>
        
    );
};

export default Login;