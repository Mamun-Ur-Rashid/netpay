import useAxiosSecure from '../../../../Hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useContext, useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import axios from 'axios';


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

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get('https://netpay-server-muhammadali246397.vercel.app/allUsers');
            console.log(res.data)
            return res.data;
        }
    });

    const { data: transection = [] } = useQuery({
        queryKey: ['transection'],
        queryFn: async () => {
            const res = await axios.get('https://netpay-server-muhammadali246397.vercel.app/adminTransection');
            console.log(res.data);
            return res.data;
        }
    })

    return (
        <div>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-1 mr-5 mt-6 text-white'>
                <div className='m-5 pl-3 pt-4 w-[90%] h-38 bg-[#33C49D] rounded-xl text-2xl'>
                   <p className='text-center font-bold pb-4'> Total Users <br /> <small className='text-5xl'>{users.length}</small></p> 
                </div>
                <div className='m-5 pl-3 pt-8 w-[90%] h-38 bg-[#C44933] rounded-xl text-2xl'>
                    <p className='text-center font-bold pb-4'> Total Transactions <br /> <small className='text-5xl'>{transection.length}</small></p>
                </div>
                <div className='m-5 pl-3 pt-8 w-[90%] h-38 bg-[#3348C4] rounded-xl text-2xl'> 
                    <p className='text-center font-bold pb-4'>  Total Agents <br /> <small className='text-5xl'>8</small></p>
                </div>
                <div className='m-5 mr-5 pl-3 pt-8 w-[90%] h-38 bg-[#0F101A] rounded-xl text-2xl'> 
                    <p className='text-center font-bold pb-4'>   Total Amount (Tk) <br /> 
                    <small className='text-5xl'>{isUserInfo.balance}</small> </p>
                </div>
            </div>
            <div className='w-full p-4 mt-10'>
                <h2 className='text-2xl font-semibold'>Transaction Analytics</h2>
                <BarChart
                    width={1000}
                    height={400}
                    data={data}

                    barSize={40}
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