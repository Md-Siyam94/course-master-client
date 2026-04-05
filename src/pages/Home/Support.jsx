import React from 'react';
import Icon1 from "../../assets/customer-support.png"
import Icon2 from "../../assets/book.png"
import Icon3 from "../../assets/stream.png"
import Icon4 from "../../assets/certificate.png"
import { Clock, FileText, GraduationCap, Lightbulb, Monitor } from 'lucide-react';
const Support = () => {
    const features = [
        { icon: <Lightbulb size={35} strokeWidth={1.5} />, title: 'Learn skills with 120k+', description: 'Video courses.' },
        { icon: <GraduationCap size={35} strokeWidth={1.5} />, title: 'Professional Tutor', description: 'Video courses.' },
        { icon: <FileText size={35} strokeWidth={1.5} />, title: 'Online Degrees', description: 'Video courses.' },
        { icon: <Clock size={35} strokeWidth={1.5} />, title: 'Flexible Schedules', description: 'Video courses.' },
        { icon: <Monitor size={35} strokeWidth={1.5} />, title: 'Interactive Content', description: 'Video courses.' },
    ];
    return (
        // <div className='grid max-w-7xl mx-auto lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:py-24 py-16 px-5  items-stretch '>
        //     <div className='py-14 rounded-2xl bg-base-100 hover:bg-base-200  shadow px-4 '>
        //         <img className='h-12 w-12 ' src={Icon1} alt="Icon" />
        //         <h1 className='text-lg my-5 font-semibold'>3 Time Support Seassion</h1>
        //         <p className=''>With three scheduled support sessions per day, you can quickly resolve any issues and accelerate your learning.</p>
        //     </div>

        //     <div className='py-14  rounded-2xl bg-base-100 hover:bg-base-200 shadow px-4 '>
        //         <img className='h-12 w-12 ' src={Icon2} alt="Icon" />
        //         <h1 className='text-lg my-5 font-semibold'>Guideline Session</h1>
        //         <p className=''>During the weekly guideline session, the team reviews project requirements and best practices.</p>
        //     </div>
        //     <div className='py-14 rounded-2xl bg-base-100 hover:bg-base-200 shadow px-4 '>
        //         <img className='h-12 w-12 ' src={Icon4} alt="Icon" />
        //         <h1 className='text-lg my-5 font-semibold'>Issuance of Certificates</h1>
        //         <p className=''>An official certificate will be awarded to successful students at the end of the course.</p>
        //     </div>

        // </div>
        <div className="bg-[#143532]  overflow-hidden py-28 px-5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {features.map((feature, index) => (
                    <div className="bg-[#264542] bg-opacity-50 backdrop-blur-sm rounded-lg p-4 border border-[#314E4C] border-opacity-30 hover:bg-opacity-70 transition-all duration-300">
                        <div className="flex  items-center gap-5">
                            <div className="text-white mt-1">
                                {feature.icon}
                            </div>
                           
                            <div>
                                <h3 className="text-white font-semibold text-2xl mb-2">{feature.title}</h3>
                                <p className="text-white ">{feature.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Support;