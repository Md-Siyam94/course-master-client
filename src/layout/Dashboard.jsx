import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

const Dashboard = () => {
    const isAdmin = true

    return (
        <div className='max-w-screen-2xl mx-auto'>
            <header>
                <Navbar></Navbar>
            </header>
            <div className='grid lg:grid-cols-12 lg:px-20 lg:gap-4 min-h-[calc(100vh-220px)]'>
                <div className='col-span-3 border py-20'>
                    <ul className='font-semibold menu bg-base-100 py-6 rounded-xl shadow  z-[1] w-full gap-4 p-2'>
                        {
                            isAdmin ? <div><li><NavLink to={"/"} className={({ isActive }) =>
                                isActive ? "text-green-500 " : " hover:text-green-500 "
                            }><GoHome className='text-xl' /> Home</NavLink></li>
                                <li>  <NavLink className={({ isActive }) =>
                                    isActive ? "text-green-500 " : " hover:text-green-500 "
                                } to={"/dashboard/profile"} ><FaRegUser className='text-lg' />Profile</NavLink></li>                           
                                <li><NavLink to={"/dashboard/add-product"} className={({ isActive }) =>
                                    isActive ? "text-green-500 " : " hover:text-green-500 "
                                }><MdOutlineAddBusiness className='text-xl' />Course Management</NavLink></li>
                                <li><button onClick={handleLogOut}><FiLogOut className='text-xl' /> Log out</button></li></div> :

                                <div>
                                    <li><Link to={"/dashboard/profile"}>
                                        <img className='h-12 w-12 rounded-full object-cover' src={user?.photoURL} alt="user photo" />
                                        {user?.displayName}</Link></li>
                                    <li>  <NavLink className={({ isActive }) =>
                                        isActive ? "text-green-500 " : " hover:text-green-500 "
                                    } to={"/dashboard/profile"} ><FaRegUser className='text-lg' />Profile</NavLink></li>
                                     <li><NavLink to={"/dashboard/my-orders"} className={({ isActive }) =>
                                    isActive ? "text-green-500 " : " hover:text-green-500 "
                                }><RiShoppingCartLine className='text-xl' /> My classes</NavLink></li>
                                    <li><NavLink to={"/dashboard/wishlist"} className={({ isActive }) =>
                                        isActive ? "text-green-500 " : " hover:text-green-500 "
                                    }><GoHeart className='text-xl' /> Wish List</NavLink></li>
                                    <li><button onClick={handleLogOut}><FiLogOut className='text-xl' /> Log out</button></li>
                                </div>

                        }
                    </ul>
                </div>
                <div className='col-span-9 border py-20'>
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