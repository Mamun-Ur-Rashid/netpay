import React, { useContext } from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import useUser from '../../../../Hook/useUser';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import { Link } from 'react-router-dom';




const UserHome = () => {

    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext);


    const { data: userData, isLoading, refetch } = useQuery({
        queryKey: ['managerequests'],
        queryFn: () => {
            const value = axiosSecure.get(`/allUsers/${user?.email}`)
            return value
        }
    })

    const acceptPayment = (data) => {
        data.decision = 'accept'
        data.myinfo = userData?.data?.number;
        axiosSecure.post(`/paymentdecision`, data).then(data => {
            refetch();
            if (data?.data?.modifiedCount == 1) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: "Payed.",
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        })
    }

    const cancelPayment = (data) => {
        data.decision = 'cancel';
        data.myinfo = userData?.data?.number;
        axiosSecure.post(`/paymentdecision`, data).then(data => {
            if (data?.data.modifiedCount == 1) {
                refetch()
            }
        })
    }
    // pie chart data
    const dataPie = [
        { name: 'SendMoney', value: 400 },
        { name: 'CashOut', value: 300 },
        { name: 'BilPayment', value: 300 },
        { name: 'MobileRecharge', value: 700 },
        { name: 'Request AddMoney', value: 500 },
    ];
    const dataPie2 = [
        { name: 'SendMoney', value: 4000 },
        { name: 'CashOut', value: 3000 },
        { name: 'BilPayment', value: 3008 },
        { name: 'MobileRecharge', value: 7008 },
        { name: 'Request AddMoney', value: 5008 },
    ];



    return (
        <div>
            {/* user dashboard card */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-1 mr-5 mt-6 text-white'>
                <Link to='/dashboard/dashboard/send-money'><div className=' m-5 p-2 pt-4 w-[90%] h-38 bg-[#33C49D] rounded-xl text-xl'>
                    <div className=' flex items-center justify-center mb-4'>
                        <img className='w-1/2 h-16 rounded  ' src="https://i.ibb.co/W0JQrSr/sendmoney.jpg" alt="" />
                    </div>
                    <div><p className='text-center  mb-4'> Send Money</p></div>
                </div></Link>

                <Link to='/dashboard/dashboard/mobileRecharge'><div className='p-2 m-5 pt-4 w-[90%] h-38 bg-[#C44933] rounded-xl text-xl'>
                    <div className=' flex items-center justify-center mb-4'>
                        <img className='w-1/2 h-16 rounded  ' src="https://i.ibb.co/RDR3Cb6/mobilerecharge.jpg" alt="" />
                    </div>
                    <p className='text-center  mb-4'> Mobile Recharge</p>
                </div></Link>
                <Link to='/dashboard/dashboard/cashOut'><div className='p-2 m-5 pt-4 w-[90%] h-38 bg-[#4e63b8] rounded-xl text-xl'>
                    <div className=' flex items-center justify-center mb-4'>
                        <img className='w-1/2 h-16 rounded  ' src="https://i.ibb.co/YNpMSsw/salary.png" alt="" />
                    </div>
                    <p className='text-center  mb-4'> Cash Out</p>
                </div></Link>
                <Link to='/dashboard/dashboard/billPayment'><div className='p-2 m-5 pt-4 w-[90%] h-38 bg-gray-500 rounded-xl text-xl'>
                    <div className=' flex items-center justify-center mb-4'>
                        <img className='w-1/2 h-16 rounded  ' src="https://i.ibb.co/yPkRLVS/bill-payment.png" alt="" />
                    </div>
                    <p className='text-center  mb-4 '> Pay Bill </p>
                </div></Link>

                <div className='p-2 m-5 pt-4 w-[90%] h-38 bg-[#adb9e6] rounded-xl text-xl'>
                    <div className=' flex items-center justify-center mb-4'>
                        <img className='w-1/2 h-16 rounded  ' src="https://i.ibb.co/yV6xRX3/makepayment.jpg" alt="" />
                    </div>
                    <p className='text-center  mb-4'> Make Payment </p>
                </div>
                <Link to='/dashboard/dashboard/requestpayment'> <div className='p-2 m-5 pt-4 w-[90%] h-38 bg-white bg-opacity-20 backdrop-blur-md rounded-xl text-xl'>
                    <div className=' flex items-center justify-center mb-4'>
                        <img className='w-1/2 h-16 rounded  ' src="https://i.ibb.co/rv0c73k/payment.jpg" alt="" />
                    </div>
                    <p className='text-center  mb-4'> Request AddMoney </p>
                </div></Link>

            </div>
            <div>
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={dataPie}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    <Pie dataKey="value" data={dataPie2} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                    <Tooltip />
                </PieChart>
            </div>

            {/* request payment */}
            <div className='flex flex-wrap justify-start p-12 items-center mt-3 gap-2 rounded-2xl'>
                {
                    userData?.data?.requests?.map(data => (
                        <div key={data.message} className='w-[270px] p-5 rounded-xl font-semibold bg-white text-base'>
                            <h1 className='text-center font-semibold text-2xl pb-7'>Payment Request</h1>
                            <h1 className='pb-1'><span className='mr-7'>Name</span>: {data?.from}</h1>
                            <h1 className='pb-1'><span className='mr-3'>Number</span>: {data?.number}</h1>
                            <h1 className='pb-1'><span className='mr-3'>Amount</span>: {data?.ammount}</h1>
                            <h1 className='pb-1'><span className='mr-2'>Message</span>: {data?.message}</h1>
                            <br />

                            <div className='flex justify-between px-1'>
                                <button className='bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-[6px] px-4 border border-blue-500 hover:border-transparent rounded' onClick={() => cancelPayment(data)}>Cancel</button>
                                <button className='bg-transparent hover:bg-green-500 text-blue-700 font-semibold hover:text-white py-[6px] px-4 border border-blue-500 hover:border-transparent rounded' onClick={() => acceptPayment(data)}>Accept</button>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default UserHome;