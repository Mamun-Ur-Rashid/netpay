

import { useContext } from 'react';
import { AuthContext } from '../pages/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useAgent = () => {
    const { user } = useContext(AuthContext);

    const { data: isAgent, isLoading } = useQuery(['isAgent', user?.email], async () => {
        const response = await fetch(`https://netpay-server-muhammadali246397.vercel.app/users/checkagent/${user?.email}`);
        const data = await response.json(); 

        return data.agent;
    });
    console.log(isAgent)
    return [isAgent, isLoading];
    
};

export default useAgent;