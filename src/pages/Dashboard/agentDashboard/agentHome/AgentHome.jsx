import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../../Hook/useAxiosSecure';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
    {
        name: 'Jan',
        totalAmount: 10000
    },
    {
        name: 'Feb',
        totalAmount: 7000
    },
    {
        name: 'Mar',
        totalAmount: 5000
    },
    {
        name: 'Apr',
        totalAmount: 6000
    },
    {
        name: 'May',
        totalAmount: 4000
    },
    {
        name: 'Jun',
        totalAmount: 6000
    },
    {
        name: 'July',
        totalAmount: 3000
    },
    {
        name: 'Aug',
        totalAmount: 5000
    },
    {
        name: 'Sep',
        totalAmount: 2000
    },
    {
        name: 'Oct',
        totalAmount: 8000
    },
    {
        name: 'Nov',
        totalAmount: 3000
    },
    {
        name: 'Dec',
        totalAmount: 5000
    }

];

const AgentHome = () => {
    const [axiosSecure] = useAxiosSecure();
    const {user} = useContext(AuthContext);
    const [isUserInfo, setUserInfo ] = useState(false);

    const { data: allTransactions = [], isLoading, refetch } = useQuery({
        queryKey: ['allTransactions'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:3000/agentAllTransactions');
            return res.data;
        }
    })
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
    return (
        <div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-1 mr-5 mt-6 text-white'>
                <div className='m-5 pl-3 pt-4 w-[90%] h-38 bg-[#33C49D] rounded-xl text-2xl'>
                   <p className='text-center font-bold pb-4'> Total Transactions <br /> <small className='text-5xl'>{allTransactions.length}</small></p> 
                </div>
                <div className='m-5 pl-3 pt-4 w-[90%] h-38 bg-[#C44933] rounded-xl text-2xl'>
                    <p className='text-center font-bold pb-4'> Total Transactions Money  <small className='text-5xl'>570000</small> </p>
                </div>
                <div className='m-5 mr-5 pl-3 pt-4 w-[90%] h-38 bg-[#0F101A] rounded-xl text-2xl'> 
                    <p className='text-center font-bold pb-4'>   Total Amount (Tk) <br /> 
                    <small className='text-5xl'>{isUserInfo.balance}</small> </p>
                </div>
            </div>
            <div className='w-full p-4 mt-18 ml-14'>
                <h2 className='text-2xl font-semibold text-center my-8'>Transaction Analytics</h2>
                <BarChart
                    width={900}
                    height={400}
                    data={data}

                    barSize={30}
                    className='mt-5'
                >
                    <XAxis dataKey="name" />
                    <YAxis></YAxis>
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="totalAmount" fill="#40218fd4" />
                </BarChart>

            </div>
        </div>
    );
};

export default AgentHome;