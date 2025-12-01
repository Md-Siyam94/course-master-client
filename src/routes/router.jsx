import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    // errorElement: <>error</>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        }
    ]
  },
]);


export default router