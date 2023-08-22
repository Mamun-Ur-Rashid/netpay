import { useContext } from 'react';
import { AuthContext } from '../pages/AuthProvider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAgent = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: isAgent, isLoading: isAgentLoading } = useQuery({
        queryKey: ['isAgent', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/allUsers/agent/${user?.email}`);
            console.log('is Agent response', res);
            return res.data.agent;
        }
    })
    return [isAgent, isAgentLoading];
};

export default useAgent;