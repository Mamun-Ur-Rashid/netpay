import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const PaymentHistory = () => {
    const { data: transection = [], isLoading, refetch } = useQuery({
        queryKey: ['transection'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:3000/adminTransection');
            return res.data;
        }
    })
    return (
        <div>
            <h2 className='text-4xl my-6 text-center font-bold'>Admin Payment History</h2>
            <div>
                <div className="overflow-x-auto p-4">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='bg-slate-400 text-lg'>
                                <th>#</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Receiver Account</th>
                                <th>Balance</th>
                                <th>Date</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                transection.map((trans, index) => <tr
                                    key={trans._id}>
                                    <th>{index + 1}</th>
                                    <th>{trans.Form}</th>
                                    <th>{trans.to}</th>
                                    <th>{trans.phone}</th>
                                    <th>{trans.amount}</th>
                                    <th>{trans.date}</th>

                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;