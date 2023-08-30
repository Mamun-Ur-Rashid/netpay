import React from 'react';
import useAxiosSecure from '../../../../Hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    
    const {data: allUsers = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allUsers');
            console.log(res.data);
            return res.data;
        }
    })
    return (
        <div> 
            <h2 className='text-4xl my-6 text-center font-bold'>All Users</h2>
            <div>
                <div className="overflow-x-auto p-4">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='bg-slate-400 text-lg'>
                                <th>#</th>
                                <th>User Name</th>
                                <th>Image</th>
                                <th>Email</th>
                                <th>Account</th>
                                <th>Balance</th>
                                <th>NID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allUsers.map((user, index) => <tr
                                    key={user._id}>
                                    <th>{index + 1}</th>
                                    <th>{user.name}</th>
                                    <th><img className='h-10 w-10 rounded-full' src={user.ImgUrl} alt="" /></th>
                                    <th>{user.email}</th>
                                    <th>{user.number}</th>
                                    <th>{user.balance} Tk</th>
                                    <th>{user.nid}</th>
                                    
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;