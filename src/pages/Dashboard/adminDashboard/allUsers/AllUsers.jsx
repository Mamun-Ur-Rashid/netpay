import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const AllUsers = () => {

    const { data: users = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get('https://vast-rose-seahorse-hem.cyclic.cloud/allUsers');
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
                       
                        <thead>
                            <tr className='bg-[#4e63b8] text-white text-lg'>
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
                                users.map((user, index) => <tr
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