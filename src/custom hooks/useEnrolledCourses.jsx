import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useEnrolledCourses = () => {
    const axiosSecure = useAxiosSecure()
    const {data: enrolledCourses = [], refetch}= useQuery({
        queryKey: ['enrolledCourses'],
        queryFn: async()=>{
            const res = await axiosSecure.get("/enrolled-courses")
            return res.data
        }
    })
    return [enrolledCourses, refetch]
};

export default useEnrolledCourses;