import React from 'react'
import { Link } from 'react-router-dom'
import useIsAdmin from '../../custom hooks/useIsAdmin'
import { FaRegEdit } from 'react-icons/fa'
import { AiOutlineDelete } from 'react-icons/ai'

export default function BlogCard({blog}) { 
const {title, description, image, category, slug , id} = blog || {}
const isAdmin = useIsAdmin()
    // delete blog
    const handleDelete = (id) => {
        console.log(id);
    }
  return (
    <div className="card bg-base-100  shadow-sm">
            <figure className="px-10 pt-10">
                <img

                    src={image}
                    alt={slug}
                    className="rounded-xl h-[145px] w-[260px]" />
            </figure>
            <div className="card-body items-center ">
                <h2 className="card-title">{title}</h2>
                <p className='opacity-60'>{description}</p>
                
                <div className="card-actions justify-center items-center gap-5">
                    <button className='py-2 px-6  cursor-pointer rounded-full font-semibold bg-teal-600 hover:bg-teal-700 text-white'><Link to={`/course-details/${id}`}>See Details</Link></button>
                    {
                        isAdmin && <div className='flex gap-6'>
                            <Link to={`/dashboard/update-course/${id}`} className='py-2 px-4 cursor-pointer rounded-full font-semibold bg-teal-600 hover:bg-teal-700 text-white'><FaRegEdit className='text-2xl' /></Link>
                            <button onClick={() => handleDelete(id)} className='py-2 px-4 cursor-pointer rounded-full font-semibold bg-teal-600 hover:bg-teal-700 text-white'><AiOutlineDelete className='text-2xl' /></button>
                        </div>
                    }
                </div>
            </div>

        </div>
  )
}
