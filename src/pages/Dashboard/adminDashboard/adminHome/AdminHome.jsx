import React from 'react';
import useAxiosSecure from '../../../../Hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AdminHome = () => {
    const [axiosSecure] = useAxiosSecure();

    const {data: allUsers = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allUsers');
            return res.data;
        }
    })
    return (
        <div>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-1 mr-5 mt-5'>
                <div className='m-5 pl-3 pt-8 w-[90%] h-28 bg-[#40218fd4] rounded-xl'>Total Users : {allUsers.length} </div>
                <div className='m-5 pl-3 pt-8 w-[90%] h-28 bg-[#40218fd4] rounded-xl'>Total Tranjections : </div>
                <div className='m-5 pl-3 pt-8 w-[90%] h-28 bg-[#40218fd4] rounded-xl'>Total Agents : </div>
                <div className='m-5 mr-5 pl-3 pt-8 w-[90%] h-28 bg-[#40218fd4] rounded-xl'>Total Amount : </div>
            </div>
        </div>
    );
};

export default AdminHome;