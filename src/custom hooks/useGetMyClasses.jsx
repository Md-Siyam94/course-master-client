import React, { useContext } from 'react';
import { AuthContex } from '../provider/AuthProvider';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useGetMyClasses = () => {
    const { user } = useContext(AuthContex)
    const axiosPublic = useAxiosPublic()

    const { data: enrolleds = [], refetch } = useQuery({
        queryKey: ["enrolleds", user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/enrolled-courses/${user?.email}`)
            return res.data
        },
        enabled: !!user?.email
    })
    return [enrolleds, refetch]
};

export default useGetMyClasses;