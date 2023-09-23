import React from 'react';
import { useForm } from 'react-hook-form';
import useUser from '../../../../../Hook/useUser';
import Swal from 'sweetalert2';


const NextFormNet = () => {
    const [isUserInfo] = useUser();
    const billInfo = localStorage.getItem("resultInfo")
    const Info = JSON.parse(billInfo)
    console.log(Info)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        data.meter=Info.meter;
        data.month= Info.month;
        data.totalBill = Info.totalbill;
        data.userAccount= isUserInfo.number
        data.transactionName = "Network bill";
        console.log(data)
        fetch('https://tasty-gray-goshawk.cyclic.cloud/upadatenetBill',{
            method:"PATCH",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
            
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: "Bill Payment Successful!",
                    showConfirmButton: false,
                    timer: 2000
                })
                reset(); 
            }
        })
    }
    return (
        <div>
             <h3 className='text-3xl font-semibold text-center mb-5 '>Check Your Information</h3>
                    <div className='shadow-2xl p-5 md:w-3/4 my-4 mx-auto bg-white bg-opacity-20 backdrop-blur-md rounded-xl'>
                        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 text-2xl'>
                            <div className='form-control md:w-3/4 mx-auto'>
                                <label className='rounded p-2 mt-2'>Subscriber ID</label>
                                <input type='text' className='input input-bordered mt-2' disabled defaultValue={Info?.meter}   {...register("meter", { maxLength: 11 })} placeholder='Meter Number' />
                            </div>
                            <div className='md:flex md:w-3/4 mx-auto gap-4'>
                                <div className='form-control w-1/2'>
                                    <label htmlFor="">Month</label>
                                    <input type='text' className='input input-bordered mt-2' disabled defaultValue={Info?.month}   {...register("month", { minLength: 11, maxLength: 11 })} placeholder='Enter Mobile Number' />
                                    {errors.mobileNumber && <span className='mt-3 text-red-400'>{errors.mobileNumber.message}</span>}
                                </div>
                                <div className='form-control w-1/2'>
                                    <label htmlFor="">Total bill</label>
                                    <input type='number' className='input input-bordered mt-2' disabled defaultValue={Info?.totalbill}  {...register("totalBill", { minLength: 2, maxLength: 6 })} placeholder='Enter Amount' />
                                    {errors.amount && <span className='mt-3 text-red-600'>{errors.amount.message}</span>}
                                </div>
                            </div>
                            <div className='form-control md:w-3/4 mx-auto'>
                                <label htmlFor="">My Account</label>
                                <input type='text' className='input input-bordered mt-2' disabled defaultValue={isUserInfo?.number}   {...register("userAccount", { maxLength: 11 })} placeholder='Enter my Account Number' />
                                {errors.userAccount && <span className='mt-3 text-red-600'>{errors.userAccount.message}</span>}
                            </div>
                            <div className='form-control md:w-3/4 mx-auto'>
                                <input type="submit" className=" cursor-pointer hover:bg-[#044fb7d8] bg-[#044EB7] text-white p-2 rounded-lg mt-2 mb-5" value="Confirm Pay Bill" />
                            </div>
                        </form>
                    </div>
        </div>
    );
};

export default NextFormNet;