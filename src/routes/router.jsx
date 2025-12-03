import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Registration/Login";
import Singup from "../pages/Registration/Singup";
import OurCourses from "../pages/All Courses/OurCourses";
import AboutUs from "../pages/About me/AboutUs";
import Blog from "../pages/Blog/Blog";
import Dashboard from "../layout/Dashboard";
import CourseDetails from "../pages/Course Details/CourseDetails";
import Profile from "../pages/Dashboard/Shared pages/Profile";
import MyClasses from "../pages/Dashboard/student pages/MyClasses";
import CourseManagement from "../pages/Dashboard/Admin pages/CourseManagement";
import PrivetRoute from "../provider/PrivetRoute";
import AddCourse from "../pages/Dashboard/Admin pages/AddCourse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    // errorElement: <>error</>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: '/our-courses',
            element: <OurCourses></OurCourses>
        },
        {
            path: '/course-details/:id',
            element: <CourseDetails></CourseDetails>,
            loader: ({params})=> fetch(`${import.meta.env.VITE_baseAPI}/courses/${params.id}`)
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        {
            path: '/about-us',
            element: <AboutUs></AboutUs>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <Singup></Singup>
        },
    ]
  },
  {
    path: "/dashboard",
    element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
    // errorElement: <div>error</div>,
    children: [
        {
            path: "/dashboard/profile",
            element: <PrivetRoute><Profile></Profile></PrivetRoute>
        },
        {
            path: "/dashboard/my-classes",
            element: <PrivetRoute><MyClasses></MyClasses></PrivetRoute>
        },
        {
            path: "/dashboard/course-management",
            element: <PrivetRoute><CourseManagement></CourseManagement></PrivetRoute>
        },
        {
            path: "/dashboard/add-course",
            element: <PrivetRoute><AddCourse></AddCourse></PrivetRoute>
        },

    ]
  }
]);


export default router