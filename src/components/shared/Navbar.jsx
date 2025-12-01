import React, { useContext } from 'react';
import { FaRegCircleUser, FaRegUser } from 'react-icons/fa6';
import { FiLogOut } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import { AuthContex } from '../../provider/AuthProvider';

const Navbar = () => {
    const {user, logout} = useContext(AuthContex)
    const links = <>
        <li><NavLink to={"/"}
            className={({ isActive }) =>
            isActive ? "border-b-2 border-teal-600 pb-0.5 " : " hover:text-teal-600 "
        }
        >Home</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive ? "border-b-2 border-teal-600 pb-0.5 " : " hover:text-teal-600 "
        } to={'/our-courses'}>Our courses</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive ? "border-b-2 border-teal-600 pb-0.5 " : " hover:text-teal-600 "
        } to={'/blog'}>Blog</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive ? "border-b-2 border-teal-600 pb-0.5 " : " hover:text-teal-600 "
        } to={'/about-us'}>About us</NavLink></li>

    </>


    // logout user
    const handleLogOut = () => {
        logout()
        .then(()=>{
            
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <div className="navbar lg:px-20 bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div> 
                <a className="btn btn-ghost text-2xl font-semibold">SIK<span className='text-teal-500'>HOO</span></a>
            </div>

            <div className="navbar-end gap-6">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu  menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div>
                    {
                        user ? <div> <div className="dropdown dropdown-end  dropdown-hover z-50">
                            <div tabIndex={0} role="button" className=""> <img
                                className="h-10 w-10  rounded-full object-cover"
                                referrerPolicy="no-referrer"
                                src={user?.photoURL}
                                alt="user photo" /></div>
                            <ul tabIndex={0} className="dropdown-content font-semibold menu bg-base-100  z-[1] w-52 p-2 shadow">
                                <li><Link>{user?.displayName}</Link></li>
                                <li><NavLink to={"/dashboard/profile"} className='hover:text-green-500  '><FaRegUser className='text-lg' /> My Account</NavLink></li>

                                <li><button onClick={handleLogOut}><FiLogOut className='text-xl' /> Log out</button></li>
                            </ul>
                        </div>
                        </div> : <div className="flex gap-2"> <Link to={'/login'} className='lg:py-3 py-1 px-6 flex items-center gap-2  border rounded-full hover:bg-teal-500 hover:text-white '><FaRegCircleUser className='text-xl ' /> Sign up</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;