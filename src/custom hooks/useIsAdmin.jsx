import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContex } from '../provider/AuthProvider';

const useIsAdmin = () => {
   const axiosSecure = useAxiosSecure();
   const {user} = useContext(AuthContex)
   const {data: isAdmin ,refetch } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async()=>{
        const res = await axiosSecure.get(`/users/admin/${user?.email}`)
        // console.log(res.data);
        return res.data;
    },
    enabled: !!user?.email
   })
   return [isAdmin,refetch]
};

export default useIsAdmin;