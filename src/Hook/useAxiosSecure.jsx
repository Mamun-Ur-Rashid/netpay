import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../pages/AuthProvider/AuthProvider';



const useAxiosSecure = () => {
  const { handleLogOut } = useContext(AuthContext) 
  const navigate = useNavigate(); 

  const axiosSecure = axios.create({
    baseURL: 'https://eager-getup-colt.cyclic.cloud', 
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use((req) => {
      const token = localStorage.getItem('access-token');
      if (token) {
        req.headers.Authorization = `Bearer ${token}`;
      }
      return req;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await handleLogOut();
          navigate('/login');
          console.log('show an error')
        }
        return Promise.reject(error);
      }
    );
  }, [handleLogOut, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;