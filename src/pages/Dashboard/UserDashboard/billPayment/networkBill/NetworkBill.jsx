
import React from 'react';
import { useForm } from 'react-hook-form';
import useUser from '../../../../../Hook/useUser';
import { useNavigate } from 'react-router-dom';

const NetworkBill = () => {
    const navigate = useNavigate()
    const [isUserInfo] = useUser()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        data.account=isUserInfo.number
        
        fetch('https://eager-getup-colt.cyclic.cloud/NetbillPay', {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
               

                if (data) {
                  const billInfo = JSON.stringify(data) 
                  localStorage.setItem('netbillInfo',billInfo)
                  navigate('/dashboard/billPayment/nextformNet')
                }
            })

    }
    return (
        <div>
              <h3 className='text-3xl font-semibold text-center mb-5 '>Pay your internet bill</h3>
            <div className='shadow-2xl p-5 md:w-1/2 my-4 bg-white bg-opacity-20 backdrop-blur-md border-white border mx-auto rounded-xl'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-2 text-2xl'>
                <div className='form-control md:w-3/4 mx-auto'>
                                <label className='rounded p-2 mt-2'>Select Month</label>
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
                                <label htmlFor="">Subscriber ID</label>
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

export default NetworkBill;