import { BsFillLightningChargeFill } from "react-icons/bs";
import CourseCard from "../../components/CourseCard";
import useCourses from "../../custom hooks/useCourses";


const Graphic = () => {
    const [courses] = useCourses()
    return (
        <div className="relative  bg-[#ffffff]  py-24">

            <div className="max-w-screen-2xl  lg:flex gap-10 items-center mx-auto">
                <img className="border-8 border-base-300 ml-16 rounded-lg" src="https://i.ibb.co/TMChCC8f/image.png" alt="tutor image" />
                <div>
                    <div className="flex flex-col items-start text-center">
                        <div className="inline-flex items-center gap-3 p-1  rounded-full mb-6 border border-gray-100">
                            <BsFillLightningChargeFill size={30} className="text-teal-600 text-4xl p-2 rounded-full bg-[#daf2f0]" />
                            <span className="text-gray-700 font-medium pr-4">Let's Join With Us</span>
                        </div>


                    </div>
                    <h1 className="lg:text-5xl md:text-4xl text-3xl font-semibold">Become an <span className="text-teal-600">Instructor</span> and
                        Join With Us </h1>
                    <p className="font-semibold my-3 opacity-65">This includes offering personalized feedback fostering a sense of community through discussion forums and group projects, and providing continuous support
                        to address challenges and improve.</p>
                </div>
            </div>
            <img className="absolute bottom-12" src="https://i.ibb.co/gLLW0rzX/content-shape-1.png" alt="" />

        </div>
    );
};

export default Graphic;