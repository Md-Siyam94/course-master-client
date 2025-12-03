import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useCourses = () => {
    const axiosSecure = useAxiosSecure()
    const {data: courses = [], refetch} = useQuery({
        queryKey: ["courses"],
        queryFn: async()=>{
            const res = await axiosSecure.get("/courses")
            return res.data
        }
    })
    // console.log(courses);
    
    return [courses, refetch]
};

export default useCourses;