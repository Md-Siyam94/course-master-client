import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const {title, description,price, thumbnail, _id } = course || {}
    return (
        <div className="card bg-base-100  shadow-sm">
            <figure className="px-10 pt-10">
                <img
                    src={thumbnail}
                    alt="thumbnail"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p className='text-lg opacity-70'>price: {price} Tk</p>
                <div className="card-actions">
                    <button className='py-2 px-6 cursor-pointer rounded-full font-semibold bg-teal-600 hover:bg-teal-700 text-white'><Link to={`/course-details/${_id}`}>See Details</Link></button>
                </div>
            </div>
            
        </div>
    );
};

export default CourseCard;