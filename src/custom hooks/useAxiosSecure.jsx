import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContex } from '../provider/AuthProvider';

const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_baseAPI}`
})

const useAxiosSecure = () => {
    
    const { logout } = useContext(AuthContex)
    // set token in the headers
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {

        return Promise.reject(error);
    })

    axiosSecure.interceptors.response.use(function (response) {
        return response
    },  (error) => {
        const status = error.response.status;
        // for 401 and 403 user log out
        if (status === 401 || status === 403) {
             logout()
             .then()
             .catch(err=>{
                console.log(err);
             })
        }

        return Promise.reject(error)
    })

    return axiosSecure
};

export default useAxiosSecure;