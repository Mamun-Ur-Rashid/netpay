
import React from 'react';
import { useForm } from 'react-hook-form';

const NetworkBill = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
    }
    return (
        <div>
              <h3 className='text-3xl font-semibold text-center mb-5 '>Pay your gas bill</h3>
            <div className='shadow-2xl p-5 md:w-1/2 my-4 mx-auto bg-gradient-to-r from-[#4e63b8] to-gray-300 rounded-xl'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-2 text-2xl'>
                    <div className='form-control md:w-3/4 mx-auto'>
                        <label htmlFor="">Agent Account</label>
                        <input type='text' disabled className='input input-bordered mt-2' {...register("agentAccount", { minLength: 11, maxLength: 11 })} placeholder='Enter Agent Account Number' />
                        {errors.agentAccount && <span className='mt-3 text-red-600'>Please input correct account number!</span>}
                    </div>
                    <div className='form-control md:w-3/4 mx-auto'>
                        <label htmlFor="">User Account</label>
                        <input type='text' className='input input-bordered mt-2' {...register("userAccount", { maxLength: 11 })} placeholder='Enter User Account Number' />
                        {errors.userAccount && <span className='mt-3 text-red-600'>Please input correct account number!</span>}
                    </div>
                    <div className='form-control md:w-3/4 mx-auto'>
                        <label htmlFor="">Amount</label>
                        <input type='number' className='input input-bordered mt-2' {...register("amount", { minLength: 3, maxLength: 6 })} placeholder='Enter Amount' />
                        {errors.amount && <span className='mt-3 text-red-600'>Please input correct value!</span>}
                    </div>
                    <div className='form-control md:w-3/4 mx-auto'>
                        <input type="submit" className=' bg-[#4e63b8] p-2 my-5 border-0 rounded-xl mb-4' value="Send Money" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NetworkBill;