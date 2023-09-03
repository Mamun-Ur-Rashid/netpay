import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../pages/AuthProvider/AuthProvider';

const useUser = () => {
    const [axiosSecure] = useAxiosSecure();
    const {user} = useContext(AuthContext);
    const [isUserInfo, setUserInfo ] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosSecure.get(`/allUsers/${user?.email}`);
                setUserInfo(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, [user]);
    return [isUserInfo]
};

export default useUser;