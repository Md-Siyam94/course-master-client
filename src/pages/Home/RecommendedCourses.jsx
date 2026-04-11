import React from 'react'
import SectionHeading from '../../components/shared/SectionHeading'
import useCourses from '../../custom hooks/useCourses'
import CourseCard from '../../components/CourseCard'
import PrimaryButton from '../../components/shared/PrimaryButton'

export default function RecommendedCourses() {
  const [courses] = useCourses([])
  return (
    <div className='  px-5 bg-[#173133] lg:pt-24 lg:pb-32 py-16 '>
      <div className='max-w-7xl mx-auto '>
        {/* section heading */}
        <SectionHeading title="Recommended Courses For You" heading="Top Class Courses" style={' text-white'}></SectionHeading>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {
            courses.slice(0, 3).map((course) => <CourseCard key={course._id} course={course}></CourseCard>)

          }
        </div>
        <PrimaryButton btnText={"View All Courses"}></PrimaryButton>
      </div>

    </div>
  )
}
