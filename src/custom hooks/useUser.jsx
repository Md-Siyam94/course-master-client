import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContex } from '../provider/AuthProvider';
import useAxiosPublic from './useAxiosPublic';


const useUser = () => {
    const { user } = useContext(AuthContex)
    const axiosPublic = useAxiosPublic()

    const { data: usersInformation = {}, refetch } = useQuery({
        queryKey: ["user", user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/${user?.email}`)
            return res.data
        },
        enabled: !!user?.email
    })
    return [usersInformation, refetch]
};

export default useUser;