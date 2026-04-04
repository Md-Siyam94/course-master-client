import CourseCard from "../../components/CourseCard";
import useCourses from "../../custom hooks/useCourses";


const Graphic = () => {
    const [courses] = useCourses()
    return (
        <div className="lg:flex items-center gap-10 py-16 max-w-7xl mx-auto px-5">
            <div>
                <h1 className="lg:text-6xl md:text-4xl text-3xl font-semibold">Join Our <span className="text-teal-600">Graphic</span> Design Course</h1>
            <p className="font-semibold my-3 opacity-65">Unlock your creative potential and bring your ideas to life with our comprehensive Graphic Design Course! Whether you’re a beginner or looking to enhance your skills, this course is designed to take you from basics to mastery.</p>
            </div>
            <div>
                {
                    courses?.slice(0,1)?.map(course=> <CourseCard key={course?._id} course={course}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default Graphic;