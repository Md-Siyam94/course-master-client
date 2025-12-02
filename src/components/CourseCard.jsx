import React from 'react';

const CourseCard = ({ course }) => {
    const {title, description, } = course || {}
    return (
        <div className="card bg-base-100  shadow-sm">
            <figure className="px-10 pt-10">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <button className='py-2 px-6 rounded-full font-semibold bg-teal-600 hover:bg-teal-700 text-white'>Enroll</button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;