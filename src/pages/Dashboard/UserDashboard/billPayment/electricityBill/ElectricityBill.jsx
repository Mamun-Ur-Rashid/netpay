
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useUser from '../../../../../Hook/useUser';


const ElectricityBill = () => {
    const [isUserInfo] = useUser();
    const navigate = useNavigate()


    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = datas => {
        datas.account = isUserInfo.number

        fetch('https://eager-getup-colt.cyclic.cloud/billPay', {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(datas)

        })
            .then(res => res.json())
            .then(data => {


                if (data) {
                    const billInfo = JSON.stringify(data)
                    localStorage.setItem('resultInfo', billInfo)
                    navigate('/dashboard/billPayment/nextform')
                }
            })

    }



    return (
        <div className='p-2 md:m-4 mb-28 pb-10 md:mt-10'>
            <h3 className='text-3xl font-semibold text-center mb-5 '>Pay your electricity bill</h3>
            <div className='shadow-2xl p-5 lg:w-1/2 my-4 mx-auto bg-white bg-opacity-20 backdrop-blur-md  rounded-xl'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-2 text-2xl'>
                    <div className='form-control md:w-3/4 mx-auto'>
                        <label className='rounded p-2 mt-2'>Select A Month</label>
                        <select className='p-3 text-base rounded-lg' {...register("month")}>
                            <option disabled>Select Month</option>
                            <option value="Jan-2023">Jan-2023</option>
                            <option value="Feb-2023">Feb-2023</option>
                            <option value="March-2023">March-2023</option>
                            <option value="April-2023">April-2023</option>
                            <option value="May-2023">May-2023</option>
                            <option value="Jun-2023">Jun-2023</option>
                            <option value="July-2023">July-2023</option>
                            <option value="Aug-2023">Aug-2023</option>
                            <option value="Sep-2023">Sep-2023</option>
                        </select>
                        {errors.userAccount && <span className='mt-3 text-red-600'>Please input correct Meter number!</span>}
                    </div>
                    <div className='form-control md:w-3/4 mx-auto'>
                        <label htmlFor="">Meter Number</label>
                        <input type='text' className='input input-bordered mt-2' required {...register("meter", { maxLength: 16 })} placeholder='Enter Meter Number' />
                        {errors.userAccount && <span className='mt-3 text-red-600'>Please input correct Meter number!</span>}
                    </div>
                    <div className='form-control md:w-3/4 mx-auto'>
                        <label htmlFor="">Your Account Number</label>
                        <input type='text' className='input input-bordered mt-2' disabled defaultValue={isUserInfo?.number} {...register("account", { minLength: 11, maxLength: 11 })} placeholder='Enter Account Number' />
                        {errors.amount && <span className='mt-3 text-red-600'>Please input correct value!</span>}
                    </div>

                    <div className='form-control md:w-3/4 mx-auto'>
                        <input type="submit" className=' bg-[#4e63b8] p-2 my-5 border-0 text-white rounded-xl mb-4' value="Next" />
                    </div>

                </form>
            </div>


        </div>
    );
};

export default ElectricityBill;