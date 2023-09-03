import React from 'react';
import { useForm } from 'react-hook-form';

const AgentAddMoney = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='p-2 md:m-4 bg-blue-400'>
            <div className='w-1/4 rounded-xl bg-[#C44933] text-center'>
                <p className='text-lg p-4'>Total Amount (Tk) <br /> <small className='text-2xl'>1200</small></p>
            </div>
            <h3 className='text-4xl font-semibold text-center mb-7 '>Add Money</h3>
            <div className='shadow-2xl p-5 md:w-1/2 my-4 mx-auto bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-3xl'>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-2 text-2xl'>
                <div className='form-control md:w-3/4 mx-auto'>
                    <label htmlFor="">Agent Account</label>
                    <input type='number' className='input input-bordered mt-2' {...register("agentAccount", { minLength: 11, maxLength:11 })} placeholder='Enter Agent Account Number' />
                    {errors.agentAccount && <span className='mt-3 text-red-600'>Please input correct account number!</span>}
                </div>
                <div className='form-control md:w-3/4 mx-auto'>
                    <label htmlFor="">User Account</label>
                    <input type='number' className='input input-bordered mt-2' {...register("userAccount", { minLength: 11, maxLength:11 })} placeholder='Enter User Account Number' />
                    {errors.userAccount && <span className='mt-3 text-red-600'>Please input correct account number!</span>}
                </div>
                <div className='form-control md:w-3/4 mx-auto'>
                    <label htmlFor="">Amount</label>
                    <input type='number' className='input input-bordered mt-2' {...register("amount", { minLength: 3, maxLength:6 })} placeholder='Enter Amount' />
                    {errors.amount && <span className='mt-3 text-red-600'>Please input correct value!</span>}
                </div>
                <div className='form-control md:w-3/4 mx-auto'>
                    <input type="submit" className='btn bg-orange-700 border-0 rounded-xl mb-4' value="add Money" />
                </div>
            </form>
            </div>
        </div>
    );
};

export default AgentAddMoney;