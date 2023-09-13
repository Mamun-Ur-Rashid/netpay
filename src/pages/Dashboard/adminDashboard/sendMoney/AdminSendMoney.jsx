import React from 'react';
import { useForm } from 'react-hook-form';

const AdminSendMoney = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='p-2 md:m-12 '>
            <h3 className='text-4xl font-semibold text-center mb-7 '>Send Money</h3>
            <div className='shadow-2xl p-5 md:w-3/4 my-4 mx-auto bg-slate-400 rounded-xl'>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 text-2xl'>
                <div className='form-control md:w-3/4 mx-auto'>
                    <label htmlFor="">Admin Account</label>
                    <input type='text' className='input input-bordered mt-2' {...register("adminAccount", { minLength: 11, maxLength:11 })} placeholder='Enter Admin Account Number' />
                    {errors.adminAccount && <span className='mt-3 text-red-600'>Please input correct account number!</span>}
                </div>
                <div className='form-control md:w-3/4 mx-auto'>
                    <label htmlFor="">Agent Account</label>
                    <input type='text' className='input input-bordered mt-2' {...register("agentAccount", { minLength: 11, maxLength:11 })} placeholder='Enter Agent Account Number' />
                    {errors.agentAccount && <span className='mt-3 text-red-600'>Please input correct account number!</span>}
                </div>
                <div className='form-control md:w-3/4 mx-auto'>
                    <label htmlFor="">Amount</label>
                    <input type='number' className='input input-bordered mt-2' {...register("amount", { minLength: 3, maxLength:6 })} placeholder='Enter Amount' />
                    {errors.amount && <span className='mt-3 text-red-600'>Please input correct value!</span>}
                </div>
                <div className='form-control md:w-3/4 mx-auto'>
                    <input type="submit" className='btn btn-primary' value="Send Money" />
                </div>
            </form>
            </div>
        </div>
    );
};

export default AdminSendMoney;