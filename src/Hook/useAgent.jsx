import { useContext } from 'react';
import { AuthContext } from '../pages/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useAgent = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const token = localStorage.getItem('access-token')
    const { data: isAgent, isLoading } = useQuery({
        queryKey:['isAgent', user?.email],


        queryFn: async () => {
            const res = await axiosSecure.get(`/users/checkAgent/${user?.email}`)
            
            return res.data.agent
        }
    })
    
    return [isAgent, isLoading];
};

export default useAgent;