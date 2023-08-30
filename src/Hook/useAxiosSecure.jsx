import  { useContext, useEffect } from 'react';
import { AuthContext } from '../pages/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const axiosSecure = axios.create({
    baseURL: 'https://netpay-server-muhammadali246397.vercel.app'
})

const useAxiosSecure = () => {

    const {handleLogOut} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token');
            if(token){
                config.headers.Authorization =`Bearer ${token}`;
            }
            return config;
        });

        axiosSecure.interceptors.response.use(
            (response) => response,
             async (error) => {
                if(error.response && (error?.response.status === 401 || error?.response.status === 403)){
                     handleLogOut();
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        )
    }, [handleLogOut, navigate]);

    return [axiosSecure];
};

export default useAxiosSecure;