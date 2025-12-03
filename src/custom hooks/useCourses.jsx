import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useCourses = () => {
    const axiosPublic = useAxiosPublic()
    const {data: courses = [], refetch} = useQuery({
        queryKey: ["courses"],
        queryFn: async()=>{
            const res = await axiosPublic.get("/courses")
            return res.data
        }
    })
    console.log(courses);
    
    return [courses, refetch]
};

export default useCourses;