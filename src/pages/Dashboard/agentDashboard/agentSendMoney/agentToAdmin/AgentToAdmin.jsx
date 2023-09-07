import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useUser from '../../../../../Hook/useUser';
import Swal from 'sweetalert2';

const AgentToAdmin = () => {
    const [isUserInfo] = useUser();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [totalBalance, setTotalBalance] = useState(isUserInfo.balance);

    useEffect(() => {
        setTotalBalance(isUserInfo.balance);
    }, [isUserInfo]);

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:3000/agentToAdmin', {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const responseData = await response.json();

                // Check if responseData contains 'totalBalance'
                if (responseData.hasOwnProperty('totalBalance')) {
                    setTotalBalance(responseData.totalBalance);
                }

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${responseData.message}`,
                    showConfirmButton: false,
                    timer: 1500
                });

                reset();
            } else {
                console.error('Failed to send money');
            }
        } catch (error) {
            console.error('An error occurred', error);
        }
    };

    return (
        <div className='p-2 md:m-4 '>
             <div className='md:flex gap-4 text-center items-center'>
            <div className='w-1/4 rounded-xl bg-[#C44933] text-center'>
                <p className='text-lg p-4'>Total Amount (Tk) <br /> <small className='text-2xl'>{totalBalance}</small></p>
            </div>
            <div>
                <p className='text-center text-4xl ml-20 font-bold'>Agent to Admin</p>
            </div>
            </div>
            <h3 className='text-4xl font-semibold text-center mb-7 '>Send Money</h3>
            <div className='shadow-2xl p-5 md:w-1/2 my-4 mx-auto bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-xl'>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-2 text-2xl'>
                <div className='form-control md:w-3/4 mx-auto'>
                    <label htmlFor="">Agent Account</label>
                    <input type='number' className='input input-bordered mt-2' {...register("agentAccount", { minLength: 11, maxLength:11 })} defaultValue={isUserInfo?.number} placeholder='Enter Agent Account Number' />
                    {errors.agentAccount && <span className='mt-3 text-red-600'>Please input correct account number!</span>}
                </div>
                <div className='form-control md:w-3/4 mx-auto'>
                    <label htmlFor="">Admin Account</label>
                    <input type='number' className='input input-bordered mt-2' {...register("adminAccount", { minLength: 11, maxLength:11 })} placeholder='Enter Admin Account Number' />
                    {errors.adminAccount && <span className='mt-3 text-red-600'>Please input correct account number!</span>}
                </div>
                <div className='form-control md:w-3/4 mx-auto'>
                    <label htmlFor="">Amount</label>
                    <input type='number' className='input input-bordered mt-2' {...register("amount", { minLength: 3, maxLength:6 })} placeholder='Enter Amount' />
                    {errors.amount && <span className='mt-3 text-red-600'>Please input correct value!</span>}
                </div>
                <div className='form-control md:w-3/4 mx-auto'>
                    <input type="submit" className='btn bg-orange-700 border-0 rounded-xl mb-4' value="Send Money" />
                </div>
            </form>
            </div>
        </div>
    );
};

export default AgentToAdmin;