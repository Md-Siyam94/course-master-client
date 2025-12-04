import React from 'react';
import Icon1 from "../../assets/customer-support.png"
import Icon2 from "../../assets/book.png"
import Icon3 from "../../assets/stream.png"
import Icon4 from "../../assets/certificate.png"
const Support = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 bg-base-200 lg:py-24 py-16 px-4 lg:px-20 mx-auto items-center '>
            <div className='py-14 rounded-2xl  bg-base-100 hover:bg-base-200 shadow px-4 '>
                <img className='h-12 w-12 ' src={Icon1} alt="Icon" />
                <h1 className='text-lg my-5 font-semibold'>3 Time Support Seassion</h1>
                <p className=''>With three scheduled support sessions per day, you can quickly resolve any issues and accelerate your learning.</p>
            </div>

            <div className='py-14  rounded-2xl bg-base-100 hover:bg-base-200 shadow px-4 '>
                <img className='h-12 w-12 ' src={Icon2} alt="Icon" />
                <h1 className='text-lg my-5 font-semibold'>Guideline Session</h1>
                <p className=''>During the weekly guideline session, the team reviews project requirements and best practices.</p>
            </div>
            <div className='py-14 rounded-2xl bg-base-100 hover:bg-base-200 shadow px-4 '>
                <img className='h-12 w-12 ' src={Icon4} alt="Icon" />
                <h1 className='text-lg my-5 font-semibold'>Issuance of Certificates</h1>
                <p className=''>An official certificate will be awarded to successful students at the end of the course.</p>
            </div>
            
        </div>
    );
};

export default Support;