import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';


const ElectricityBill = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate()

    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:3000/billPay', {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if(result){
                    navigate('/')
                }
            })
    }
    return (
        <div>
            <h3 className='text-3xl font-semibold text-center mb-5 '>Pay your electricity bill</h3>
            <div className='shadow-2xl p-5 md:w-1/2 my-4 mx-auto bg-gradient-to-r from-[#4e63b8] to-gray-300 rounded-xl'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-2 text-2xl'>
                    <div className='form-control md:w-3/4 mx-auto'>
                        <label htmlFor="">Meter Number</label>
                        <input type='text' className='input input-bordered mt-2' {...register("meter", { maxLength: 16 })} placeholder='Enter Meter Number' />
                        {errors.userAccount && <span className='mt-3 text-red-600'>Please input correct Meter number!</span>}
                    </div>
                    <div className='form-control md:w-3/4 mx-auto'>
                        <label htmlFor="">Your Account Number</label>
                        <input type='text' className='input input-bordered mt-2' {...register("account", { minLength: 11, maxLength: 11 })} placeholder='Enter Account Number' />
                        {errors.amount && <span className='mt-3 text-red-600'>Please input correct value!</span>}
                    </div>
                   
                        <div className='form-control md:w-3/4 mx-auto'>
                            <input type="submit" className=' bg-[#4e63b8] p-2 my-5 border-0 rounded-xl mb-4' value="Next" />
                        </div>
                    
                </form>
            </div>
        </div>
    );
};

export default ElectricityBill;