import React, { useContext } from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';



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


    return (
        <div>
            <div className='bg-white ml-12 mt-6 p-1 w-fit rounded-xl'><p className='text-xl font-semibold m-3'>Total Amount: {userData?.data?.balance}</p></div>

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