
// import { useContext } from 'react';
// import { AuthContext } from '../pages/AuthProvider/AuthProvider';
// import useAxiosSecure from './useAxiosSecure';
// import { useQuery } from '@tanstack/react-query';

// const useAdmin = () => {
//     const { user } = useContext(AuthContext);
//     console.log(user)
//     const axiosSecure = useAxiosSecure();


//     const { data: isAdmin, isLoading } = useQuery(['isAdmin', user?.email], async () => {

//         const response = await fetch(`http://localhost:3000/users/checkadmin/${user?.email}`);

//         console.log("is Admin response", response.data);

        
//     });
   

//     return [isAdmin, isLoading];
// };

// export default useAdmin;

import { useContext } from 'react';
import { AuthContext } from '../pages/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const { user } = useContext(AuthContext);

    const { data: isAdmin, isLoading } = useQuery(['isAdmin', user?.email], async () => {
        const response = await fetch(`https://netpay-server-muhammadali246397.vercel.app/users/checkadmin/${user?.email}`);
        const data = await response.json(); 
        return data.admin;
    });
    return [isAdmin, isLoading];
};

export default useAdmin;