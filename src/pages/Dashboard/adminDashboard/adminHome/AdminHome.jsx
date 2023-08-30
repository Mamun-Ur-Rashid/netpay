import React from 'react';
import useAxiosSecure from '../../../../Hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
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


const AdminHome = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: allUsers = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allUsers');
            return res.data;
        }
    })
    return (
        <div>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-1 mr-5 mt-5'>
                <div className='m-5 pl-3 pt-8 w-[90%] h-28 bg-[#cccbd1d4] rounded-xl'>Total Users : {allUsers.length} </div>
                <div className='m-5 pl-3 pt-8 w-[90%] h-28 bg-[#cccbd1d4] rounded-xl'>Total Tranjections : </div>
                <div className='m-5 pl-3 pt-8 w-[90%] h-28 bg-[#cccbd1d4] rounded-xl'>Total Agents : </div>
                <div className='m-5 mr-5 pl-3 pt-8 w-[90%] h-28 bg-[#cccbd1d4] rounded-xl'>Total Amount : </div>
            </div>
            <div className='w-full p-4'>
                <h2 className='text-2xl font-semibold'>Transiction Analytics</h2>
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

export default AdminHome;