import React, { useContext } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import { GoHome } from "react-icons/go";
import { FaRegUser } from 'react-icons/fa6';
import { FiLogOut } from 'react-icons/fi';
import { MdOutlineManageHistory } from "react-icons/md";
import useIsAdmin from '../custom hooks/useIsAdmin';
import { IoBookOutline } from 'react-icons/io5';
import { AuthContex } from '../provider/AuthProvider';


const Dashboard = () => {
    const [isAdmin] = useIsAdmin()
    const {logout} = useContext(AuthContex)
    const navigate = useNavigate()


    const handleLogOut=()=>{
        logout()
        .then(()=>{
            navigate('/')
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return (
        <div className='max-w-screen-2xl mx-auto'>
            <header>
                <Navbar></Navbar>
            </header>
            <div className='grid lg:grid-cols-12 grid-cols-1 lg:px-20 lg:gap-4 bg-base-200 min-h-[calc(100vh-220px)]'>
                <div className='lg:col-span-3 hidden lg:block  py-20'>
                    <ul className='font-semibold menu bg-base-100 py-6 rounded-xl shadow   w-full gap-4 p-2'>
                        {
                            isAdmin ? <div><li><NavLink to={"/"} className={({ isActive }) =>
                                isActive ? "text-green-500 " : " hover:text-green-500 "
                            }><GoHome className='text-xl' /> Home</NavLink></li>
                                <li>  <NavLink className={({ isActive }) =>
                                    isActive ? "text-green-500 " : " hover:text-green-500 "
                                } to={"/dashboard/profile"} ><FaRegUser className='text-lg' />Profile</NavLink></li>                           
                                <li><NavLink to={"/dashboard/course-management"} className={({ isActive }) =>
                                    isActive ? "text-green-500 " : " hover:text-green-500 "
                                }><MdOutlineManageHistory className='text-xl' />Course Management</NavLink></li>
                                <li><button onClick={handleLogOut}><FiLogOut className='text-xl' /> Log out</button></li></div> :

                                <div>
                                    <li><NavLink to={"/"} className={({ isActive }) =>
                                isActive ? "text-green-500 " : " hover:text-green-500 "
                            }><GoHome className='text-xl' /> Home</NavLink></li>
                                    <li>  <NavLink className={({ isActive }) =>
                                        isActive ? "text-green-500 " : " hover:text-green-500 "
                                    } to={"/dashboard/profile"} ><FaRegUser className='text-lg' />Profile</NavLink></li>
                                     <li><NavLink to={"/dashboard/my-classes"} className={({ isActive }) =>
                                    isActive ? "text-green-500 " : " hover:text-green-500 "
                                }><IoBookOutline className='text-xl' /> My classes</NavLink></li>
                                
                                    <li><button onClick={handleLogOut}><FiLogOut className='text-xl' /> Log out</button></li>
                                </div>

                        }
                    </ul>
                </div>
                <div className='col-span-9 bg-base-200 py-20'>
                    <Outlet></Outlet>
                </div>
            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Dashboard;