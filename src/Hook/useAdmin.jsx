
// import { useContext } from 'react';
// import { AuthContext } from '../pages/AuthProvider/AuthProvider';
// import useAxiosSecure from './useAxiosSecure';
// import { useQuery } from '@tanstack/react-query';

// const useAdmin = () => {
//     const { user } = useContext(AuthContext);
//     // console.log(user)
//     const [axiosSecure] = useAxiosSecure();


//     const { data: isAdmin=[], isLoading: loading,  } = useQuery({
//         queryKey: ['isAdmin'],
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/users/checkAdmin/${user?.email}`);
//             console.log(res.data);
//             return res.data;
//         }
//     });


//     return [isAdmin, loading];
// };

// export default useAdmin;

import { useContext } from 'react';
import { AuthContext } from '../pages/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const { user } = useContext(AuthContext);

    const { data: isAdmin, isLoading } = useQuery(['isAdmin', user?.email], async () => {
        const response = await fetch(`https://netpay-server-muhammadali246397.vercel.app/users/checkAdmin/${user?.email}`);
        const data = await response.json();
        return data.admin;
    });
    console.log(isAdmin);
    return [isAdmin, isLoading];

};

export default useAdmin;