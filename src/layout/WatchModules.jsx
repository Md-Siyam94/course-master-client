import { NavLink, Outlet, useParams } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import useAxiosPublic from "../custom hooks/useAxiosPublic";
import { useEffect, useState } from "react";


const WatchModules = () => {
    const axiosPublic = useAxiosPublic()
    const [course, setCourse] = useState({})
    const params = useParams();
    const [currentVideo, setCurrentVideo] = useState(null);
    const [currentId, setCurrentId] = useState(null);
    const [assignment, setAssignment] = useState(false)
    const [currentModule, setCurrentModule] = useState({})
    const [modules, setModules] = useState([])
    useEffect(() => {
        axiosPublic.get(`/courses/${params?.id}`)
            .then(res => {
                setCourse(res.data)
                if (res.data.modules && res.data.modules.length > 0) {
                    setCurrentVideo(res.data.modules[0].videoUrl);
                    setCurrentId(res.data.modules[0]._id || null);
                    setModules(res.data.modules)

                }
            })
    }, [axiosPublic, params?.id])


    const handleModuleClick = (id) => {
        // Mark previous module completed
        axiosPublic.put(`/courses/update/${course?._id}/${id}`)
            .then(res => {
                if (res.data?.modifiedCount > 0) {
                    // 2. Update UI state
                    setModules(prev =>
                        prev.map(module =>
                            module._id === id ? { ...module, isCompleted: true } : module
                        )
                    );
                }
            })
            .catch(err => console.error(err));


        const clickedModule = modules.find(module => module?._id === id);
        // currentModule(clickedModule)
        // if (clickedModule?.assignment) {
        //     setAssignment(true)
        // }
        if (clickedModule?.videoUrl) {
            setCurrentVideo(clickedModule.videoUrl);
        }
        setCurrentId(id);
    };
    const completedCount = modules.filter(module => module?.isCompleted)?.length;
    const totalCount = modules?.length;
    const progress = totalCount ? (completedCount / totalCount) * 100 : 0;

    console.log(completedCount,progress);
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <header className='max-w-screen-2xl mx-auto'>
                <Navbar></Navbar>
            </header>
            <main className='min-h-[calc(100vh-220px)] lg:w-11/12 mx-auto lg:px-20'>
                <div className="grid lg:grid-cols-12 grid-cols-1 py-24 gap-4">
                    {/* ifram */}
                    <div className="col-span-8 lg:max-h-[calc(100vh-220px)] ">
                        {currentVideo ? <div>
                            <iframe className="lg:h-[420px] lg:w-[815px] w-full h-96" src={currentVideo} title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen>
                            </iframe>

                            <div className="flex justify-end">
                                <button className="py-2 px-6 cursor-pointer mt-4  font-semibold bg-teal-600 hover:bg-teal-700 text-white">Next</button>
                            </div>
                        </div> : <div className="mt-5 p-4 border rounded-xl bg-gray-100">
                            <h2 className="font-bold text-xl">📘 Assignment</h2>
                            <p>{currentModule?.assignment}</p>

                            <textarea
                                className="w-full border p-2 rounded mt-3"
                                placeholder="Submit your assignment..."
                            // value={submission}
                            // onChange={(e) => setSubmission(e.targetValue)}
                            ></textarea>

                            <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded">
                                Submit Assignment
                            </button>
                        </div>
                        }
                    </div>
                    <div className="col-span-4 max-h-[calc(100vh-220px)] w-full overflow-y-scroll p-4">
                       <div className="flex gap-2 items-center">
                         <p className="font-semibold"> {progress} %</p>
                        <progress className="progress progress-success w-56" value={progress} max="100"></progress>
                       </div>
                        {/* video list */}
                        {
                            modules?.map((module, index) => <NavLink onClick={() => handleModuleClick(module?._id)} className="p-5 w-full hover:bg-teal-600 hover:text-white items-center shadow flex gap-4 my-2" key={index}>
                                {module?.isCompleted && <span className="  rounded-full  font-semibold ml-1 text-xl">✔</span>
                                }
                                <p className="">{index + 1}</p>
                                {module?.assignment ?
                                    <span>📘 Assignment (Marks: {module?.mark})</span> : <span>{module.videoTitle}</span>
                                }
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