import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import useUser from '../../../../Hook/useUser';
import useAxiosSecure from '../../../../Hook/useAxiosSecure';


const AllTransaction = () => {
    const [axiosSecure] = useAxiosSecure();
    const [user] = useUser();
    console.log(user);

    const { data: userTransactions = [], isLoading, refetch } = useQuery({
        queryKey: ['userTransactions', user?.number],
        queryFn: async () => {
            const res = await axiosSecure.get(`/userTransactions/${user?.number}`);
            console.log(res.data);
            return res.data;
        }
    })
        return (
            <div>
                 <h2 className='text-4xl my-6 text-center font-bold'>All Transactions!</h2>
                <div>
                    <div className="overflow-x-auto p-4">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className='bg-gray-500 text-lg text-white'>
                                    <th>#</th>
                                    <th>Transaction Name</th>
                                    <th>Receiver Number</th>
                                    <th>Amount</th>
                                    <th>Transaction Id</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userTransactions.map((userTransaction, index) => <tr
                                        key={userTransaction._id} className='bg-[#e2e8f0]
                                        '>
                                        <th>{index + 1}</th>
                                        <th>{userTransaction.transactionName}</th>
                                        <th>{userTransaction.number}</th>
                                        <th>{userTransaction.amount} Tk</th>
                                        <th>{userTransaction._id}</th>
                                        <th>{userTransaction.date}</th>
    
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    };

export default AllTransaction;