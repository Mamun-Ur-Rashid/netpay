
// import { useContext } from 'react';
// import { AuthContext } from '../pages/AuthProvider/AuthProvider';
// import useAxiosSecure from './useAxiosSecure';
// import { useQuery } from '@tanstack/react-query';

// const useAdmin = () => {
//     const { user } = useContext(AuthContext);
//     // console.log(user)
//     const [axiosSecure] = useAxiosSecure();


//     const { data: isAdmin, isLoading: isAdminLoading,  } = useQuery({
//         queryKey: ['isAdmin', user?.email],
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/users/admin/${user?.email}`);
//             console.log("Is admin response", res);
//             return res.data;
//         }
//     });


//     return [isAdmin, isAdminLoading];
// };

// export default useAdmin;

import { useContext } from 'react';
import { AuthContext } from '../pages/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const { user } = useContext(AuthContext);
    console.log(user);

    const { data: isAdmin, isLoading } = useQuery(['isAdmin', user?.email], async () => {
        const response = await fetch(`http://localhost:5000/users/checkAdmin/${user?.email}`);
        const data = await response.json();
        return data.admin;
    });
    console.log(isAdmin);
    return [isAdmin, isLoading];

};

export default useAdmin;