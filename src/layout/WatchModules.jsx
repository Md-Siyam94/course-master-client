import { NavLink, Outlet, useParams } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import useAxiosPublic from "../custom hooks/useAxiosPublic";
import { useEffect, useState } from "react";


const WatchModules = () => {
    const axiosPublic = useAxiosPublic()
    const [course, setCourse] = useState({})
    const [vdoUrl, setVdoUrl] = useState("")
    const params = useParams()
    useEffect(() => {
        axiosPublic.get(`/courses/${params?.id}`)
            .then(res => {
                setCourse(res.data)

                if (res.data.modules && res.data.modules.length > 0) {
                    setVdoUrl(res.data.modules[0].videoUrl);
                }
            })
    }, [axiosPublic,])
    const { title, description, price, instructor, thumbnail, batch, syllabus, modules, _id } = course || {}

    const handleSetUrl = (url) => {
        setVdoUrl(url)
    }

    return (
        <div className='max-w-screen-2xl mx-auto'>
            <header className='max-w-screen-2xl mx-auto'>
                <Navbar></Navbar>
            </header>
            <main className='min-h-[calc(100vh-220px)] lg:w-11/12 mx-auto lg:px-20'>
                <div className="grid lg:grid-cols-12 grid-cols-1 py-24 gap-4">
                    {/* ifram */}
                    <div className="col-span-8 lg:max-h-[calc(100vh-220px)] ">
                        <iframe className="lg:h-[420px] lg:w-[815px] w-full h-96" src={vdoUrl} title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen>
                        </iframe>

                        <div className="flex justify-end">
                            <button className="py-2 px-6 cursor-pointer mt-4  font-semibold bg-teal-600 hover:bg-teal-700 text-white">Next</button>
                        </div>
                    </div>
                    <div className="col-span-4 max-h-[calc(100vh-220px)] w-full overflow-y-scroll p-4">
                        {/* video list */}
                        {
                            modules?.map((module, index) => <NavLink onClick={() => handleSetUrl(module?.videoUrl)} className="p-5 w-full hover:bg-teal-600 hover:text-white  shadow flex gap-4 my-2" key={index}>
                                <p className="">{index + 1}</p>
                                <h1 className="text-lg font-semibold">{module?.videoTitle}</h1>
                            </NavLink>)
                        }
                    </div>
                </div>

            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default WatchModules;