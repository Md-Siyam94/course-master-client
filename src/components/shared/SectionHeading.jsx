import React from 'react'
import { BsFillLightningChargeFill } from 'react-icons/bs'

export default function SectionHeading({ title, heading, style }) {
    return (
        <div  className={`flex flex-col ${style?.includes('items-start') ? 'items-start' : 'items-center'} mb-16`}>
            <div className={`flex flex-col items-center pt-6 text-center`}>
                <div className="inline-flex items-center gap-3 p-1  rounded-full mb-6 border bg-white border-gray-300">
                    <BsFillLightningChargeFill size={30} className="text-teal-600 text-4xl p-2 rounded-full bg-[#daf2f0]" />
                    <span className="text-gray-700  font-medium pr-4">{heading}</span>
                </div>

            </div>
            <h1 className={`lg:text-5xl ${style } text-3xl mx-auto ${style?.includes('text-start') ? 'text-start' : 'text-center'} font-semibold`}>{title}</h1>
        </div>
    )
}
