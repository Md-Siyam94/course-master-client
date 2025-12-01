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
]);


export default router