

// import { useContext } from 'react';
// import { AuthContext } from '../pages/AuthProvider/AuthProvider';
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import useAxiosSecure from './useAxiosSecure';

// const useAdmin = () => {
//     const { user } = useContext(AuthContext);
//     const [axiosSecure] = useAxiosSecure()


//     const { data: isAdmin, isLoading } = useQuery({
//         queryKey:['isAdmin',user?.email],
//         queryFn:async () => {
//             const res = await axiosSecure.get(`/users/checkAdmin/${user?.email}`)
//             console.log(res.data)
//             return res.data.admin
//         }
//     })
//     return [isAdmin,isLoading]

// };

// export default useAdmin;



import { useContext } from 'react';
import { AuthContext } from '../pages/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure()


    const { data: isAdmin, isLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/checkAdmin/${user?.email}`)
            return res.data.admin
        }
    })
    return [isAdmin, isLoading]

};

export default useAdmin;

