import { FaRegStar } from "react-icons/fa";
import { FiClock, FiUsers } from "react-icons/fi";



const WhyChooseUs = () => {
    return (
        <div className="lg:px-20 px-6 lg:py-24 py-16 text-center">
            <h1 className="lg:text-7xl md:text-5xl text-3xl font-semibold">Why <span className="text-teal-500">Shi</span>khoo?</h1>
            <p className="lg:w-8/12  mx-auto font-semibold opacity-65 my-10">Transform your creative thinking into professional skills with our complete graphics design course. Learn from industry experts and build a portfolio that catches the eye of clients.</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 my-10 grid-cols-1 gap-6">
                <div className="flex gap-6 p-6 rounded-xl hover:bg-teal-100 items-center">
                    <FiUsers className="lg:text-4xl text-3xl" />
                    <div>
                        <h1 className="lg:text-4xl text-2xl font-semibold">5000 +</h1>
                        <p className="text-sm font-semibold">Students enroll our courses</p>
                    </div>
                </div>
                <div className="flex gap-6 p-6 rounded-xl hover:bg-teal-100 items-center">
                    <FaRegStar  className="lg:text-4xl text-3xl" />
                    <div>
                        <h1 className="lg:text-4xl text-2xl font-semibold">4.9</h1>
                        <p className="text-sm font-semibold">Students enroll our courses</p>
                    </div>
                </div>
                <div className="flex gap-6 p-6 rounded-xl hover:bg-teal-100 items-center">
                    <FiClock className="lg:text-4xl text-3xl" />
                    <div>
                        <h1 className="lg:text-4xl text-2xl font-semibold">5000 +</h1>
                        <p className="text-sm font-semibold">Students enroll our courses</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default WhyChooseUs;