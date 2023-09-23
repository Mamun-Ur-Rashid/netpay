import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useUser from '../../../../Hook/useUser';
import Swal from 'sweetalert2';

const UserCashOut = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [user] = useUser();
    const [error, SetError] = useState(null)
    const onSubmit = data => {
        data.userNumber = user?.number;
        data.transactionName = "Cash Out";
        console.log(data)

        fetch('https://eager-getup-colt.cyclic.cloud/cashOut', {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: "Cash Out Successful!",
                    showConfirmButton: false,
                    timer: 2000
                })
                reset();
                SetError(null)
            }
            else{
                SetError(data)
            }
        })
    }
    return (
        <div className='p-2 md:m-12 '>
            <h3 className='text-4xl font-semibold text-center mb-7 '>Cash Out form Agent</h3>
            <div className='shadow-2xl p-5 md:w-3/4 my-4 mx-auto bg-white bg-opacity-20 backdrop-blur-md rounded-xl'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 text-2xl'>
                    <div className='form-control md:w-3/4 mx-auto'>
                        <label htmlFor="">User Account</label>
                        <input type='text' className='input input-bordered mt-2' disabled defaultValue={user?.number} {...register("userNumber", { maxLength: 11 })} placeholder='Enter Admin Account Number' />
                        {errors.adminAccount && <span className='mt-3 text-red-600'>Please input correct account number!</span>}
                    </div>
                    <div className='form-control md:w-3/4 mx-auto'>
                        <label htmlFor="">Agent Account</label>
                        <input type='text' className='input input-bordered mt-2' {...register("agentNumber", { minLength: 11, maxLength: 11 })} placeholder='Enter Agent Account Number' />
                        {errors.agentAccount && <span className='mt-3 text-red-600'>Wrong Agent Number</span>}
                    </div>
                    <div className='form-control md:w-3/4 mx-auto'>
                        <label htmlFor="">Amount</label>
                        <input type='number' className='input input-bordered mt-2' {...register("cashOutAmount", { minLength: 3, maxLength: 6 })} placeholder='Enter Amount' />
                        {errors.amount && <span className='mt-3 text-red-600'>Please input correct value!</span>}
                    </div>
                    {error && (
                        <div className='form-control md:w-3/4 mx-auto'>
                            <p className='mt-3 text-red-600'>{error.message}</p>
                        </div>
                    )}
                    <div className='form-control md:w-3/4 mx-auto'>
                        <input type="submit" className=" bg-[#4e63b8] p-2 rounded-xl mt-2 mb-4" value="Cash Out" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserCashOut;
