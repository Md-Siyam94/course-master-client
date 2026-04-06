import React from 'react'
import { BsFillLightningChargeFill } from 'react-icons/bs'
import { Settings, Code, TrendingUp, Building2, Dumbbell, Pencil, Zap } from 'lucide-react';
export default function TopCourses() {
    const categories = [
        { icon: <Settings size={32} strokeWidth={1.5} />, title: 'Technology', courseCount: 15 },
        { icon: <Code size={32} strokeWidth={1.5} />, title: 'Development', courseCount: 15 },
        { icon: <TrendingUp size={32} strokeWidth={1.5} />, title: 'Marketing', courseCount: 15 },
        { icon: <Building2 size={32} strokeWidth={1.5} />, title: 'Financial', courseCount: 15 },
        { icon: <Dumbbell size={32} strokeWidth={1.5} />, title: 'Fitness Train', courseCount: 15 },
        { icon: <Pencil size={32} strokeWidth={1.5} />, title: 'Technology', courseCount: 15 },
    ];
    return (
        // <div className='max-w-7xl mx-auto'>
        //     <div className='w-54 flex gap-2 items-center p-1 justify-center mx-auto border rounded-full'>
        //         <p className=''>
        //             <BsFillLightningChargeFill className="text-teal-600 text-4xl p-2 rounded-full bg-teal-100"/>
        //         </p>
        //         <h1>Top Courses Category</h1>
        //     </div>
        // </div>
        <div className="max-w-7xl mx-auto bg-white flex items-center justify-center py-20 px-4">
            <div className="max-w-7xl w-full">
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="inline-flex items-center gap-3 p-1  rounded-full mb-6 border border-gray-100">
                        <BsFillLightningChargeFill size={30} className="text-teal-600 text-4xl p-2 rounded-full bg-[#daf2f0]" />
                        <span className="text-gray-700 font-medium pr-4">Top Course Category</span>
                    </div>

                    <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">
                        Explore 40000+ Free New
                        <br />
                        Online Courses
                    </h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                    {categories.map((category, index) => (
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 flex flex-col items-center justify-center min-w-[200px] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                            <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center mb-4">
                                <div className="text-cyan-500">
                                    {category.icon}
                                </div>
                            </div>
                            <h3 className="text-gray-900 font-semibold text-lg mb-2">{category.title}</h3>
                            <p className="text-gray-500 text-sm">{category.courseCount} Courses</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
