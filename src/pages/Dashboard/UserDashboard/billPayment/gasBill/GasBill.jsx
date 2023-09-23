import React from 'react';
import { useForm } from 'react-hook-form';
import useUser from '../../../../../Hook/useUser';
import { useNavigate } from 'react-router-dom';

const GasBill = () => {
    const navigate = useNavigate()
    const [isUserInfo] = useUser()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
       
        data.userAccount=isUserInfo.number
        console.log(data)

        fetch('https://tasty-gray-goshawk.cyclic.cloud/gasbillPay', {
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
                  localStorage.setItem('gasbillInfo',billInfo)
                  navigate('/dashboard/billPayment/nextformGas')
                }
            })
    }
    return (
        <div>
              <h3 className='text-3xl font-semibold text-center mb-5 '>Pay your gas bill</h3>
            <div className='shadow-2xl p-5 md:w-1/2 my-4 mx-auto  bg-white bg-opacity-20 backdrop-blur-md border-white border rounded-xl'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-2 text-2xl'>
                  
                    <div className='form-control md:w-3/4 mx-auto'>
                        <label htmlFor="">Custumar ID </label>
                        <input type='text' className='input input-bordered mt-2' {...register("custumarId", { maxLength: 11 })} placeholder='Enter User Account Number' />
                        {errors.userAccount && <span className='mt-3 text-red-600'>Please input correct account number!</span>}
                    </div>
                    <div className='form-control md:w-3/4 mx-auto'>
                                <label htmlFor="">Your Account Number</label>
                                <input type='text' className='input input-bordered mt-2' disabled defaultValue={isUserInfo?.number} {...register("userAccount", { minLength: 11, maxLength: 11 })} placeholder='Enter Account Number' />
                                {errors.amount && <span className='mt-3 text-red-600'>Please input correct value!</span>}
                            </div>
                    <div className='form-control md:w-3/4 mx-auto'>
                        <input type="submit" className=' bg-[#4e63b8] p-2 my-5 border-0 rounded-xl mb-4 text-white cursor-pointer' value="NEXT" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default GasBill;