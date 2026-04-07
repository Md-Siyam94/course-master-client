import { FaCheckCircle, FaRegStar } from "react-icons/fa";
import { FiClock, FiUsers } from "react-icons/fi";
import { Zap, Check } from 'lucide-react';
import ChooseUsBg from '../../assets/choose-us-bg.png'
import { BsFillLightningChargeFill } from "react-icons/bs";
import SectionHeading from "../../components/shared/SectionHeading";


const WhyChooseUs = () => {

    return (
       
        <div style={{
            backgroundImage: `url(${ChooseUsBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",

            width: "100%"
        }} className="relative py-20 px-4 h-screen overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-200 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-200 rounded-full opacity-20 -translate-x-1/3 translate-y-1/3 blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Heading */}
                <SectionHeading title="Why Choose Us!" heading="Reason to Choose" style={"text-center"}></SectionHeading>
                {/* body */}
                <div className="relative mt-32">
                    <div className="hidden lg:block h-1 -top-12 absolute  left-0 right-0 bg-gradient-to-r from-transparent via-teal-600 to-transparent mx-auto" style={{ width: '100%' }}></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {/* Feature 1 */}
                        <div className="relative  lg:pt-16">
                            <div className="hidden lg:flex absolute p-0 -top-14 left-1/2 -translate-x-1/2 flex-col items-center">
                                <div className="w-5 h-5 bg-white rounded-full border-5 border-teal-600 shadow-lg"></div>
                                <div className="hidden md:block w-1  top-6    left-0 right-0 bg-gradient-to-t from-transparent to-teal-600 mx-auto" style={{ height: '100px' }}></div>
                                {/* <div className="w-1 h-24 bg-teal-600"></div> */}
                                <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                            </div>

                            <div className="bg-white rounded-xl p-8 hover:bg-teal-600 hover:text-white shadow-lg hover:shadow-xl transition-shadow duration-300 ">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-6 h-6 bg-teal-600 hover:bg-white rounded-full flex items-center justify-center">
                                        <FaCheckCircle className="w-5 h-5 text-white hover:text-teal-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold  mb-3">155,000 Video Courses</h3>
                                        <p className=" leading-relaxed">Sed ut perspiciatis unde omnis iste natus sit voluptatemec lifes accusantium</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Feature 2 */}
                        <div className="relative  lg:pt-36">
                            <div className="hidden lg:flex absolute -top-14 left-1/2 -translate-x-1/2 flex-col items-center">
                                <div className="w-5 h-5 bg-white rounded-full border-5 border-teal-600 shadow-lg"></div>
                                <div className="hidden md:block w-1  top-6    left-0 right-0 bg-gradient-to-t from-transparent to-teal-600 mx-auto" style={{ height: '180px' }}></div>
                                {/* <div className="w-1 h-24 bg-teal-600"></div> */}
                                <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                            </div>

                            <div className="bg-white rounded-xl p-8 hover:bg-teal-600 hover:text-white  shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center">
                                        <FaCheckCircle className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold  mb-3">Top Industry Instructors</h3>
                                        <p className=" leading-relaxed">Learn from experts in their fields with real-world experience and knowledge.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Feature 3 */}
                        <div className="relative md:col-span-2 md:w-1/2 lg:w-full  mx-auto lg:col-span-1 lg:pt-16">
                            <div className="hidden lg:flex absolute -top-14 left-1/2 -translate-x-1/2 flex-col items-center">
                                <div className="w-5 h-5 bg-white rounded-full border-5 border-teal-600 shadow-lg"></div>
                                <div className="hidden md:block w-1  top-6    left-0 right-0 bg-gradient-to-t from-transparent to-teal-600 mx-auto" style={{ height: '100px' }}></div>
                                {/* <div className="w-1 h-24 bg-teal-600"></div> */}
                                <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                            </div>

                            <div className="bg-white rounded-xl p-8 hover:bg-teal-600 hover:text-white  shadow-lg hover:shadow-xl transition-shadow duration-300 ">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center">
                                        <FaCheckCircle className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold  mb-3">Lifetime Full Access</h3>
                                        <p className=" leading-relaxed">Sed ut perspiciatis unde omnis iste natus sit voluptatemec lifes accusantium</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;