import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useUser from '../../../../Hook/useUser';
import Swal from 'sweetalert2';

const UserCashOut = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [user] = useUser();
    const [error, SetError] = useState(null)
    const onSubmit = data => {
        data.userNumber = user?.number;
        console.log(data)

        fetch('https://vast-rose-seahorse-hem.cyclic.cloud/cashOut', {
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
            <div className='shadow-2xl p-5 md:w-3/4 my-4 mx-auto bg-gradient-to-r from-[#4e63b8] to-gray-300 rounded-xl'>
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
                        <input type="submit" className=" bg-[#4e63b8] p-2" value="Cash Out" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserCashOut;
// import React, {useState } from 'react';
// import { useForm } from 'react-hook-form';
// import useUser from '../../../../Hook/useUser';
// import Swal from 'sweetalert2';


// const UserCashOut = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const [isUserInfo] = useUser();
//     const [error, SetError] = useState(null)
//     const onSubmit = data => {
//         console.log(data)
//         fetch('https://vast-rose-seahorse-hem.cyclic.cloud/cashOut', {
//             method: "PATCH",
//             headers: {
//                 "content-type": "application/json"
//             },
//             body: JSON.stringify(data)
//         })
//         .then(res => res.json())
//         .then(data => {
//             if(data.acknowledged){
//                 Swal.fire({
//                     position: 'center',
//                     icon: 'success',
//                     title: "Cash Out Successful!",
//                     showConfirmButton: false,
//                     timer: 2000
//                 })
//                 SetError(null)
//             }
//             else{
//                 SetError(data)
//             }
//         })
//     }
//     return (
//         <div className='p-2 md:m-4 mb-28 pb-10'>
//             <h3 className='text-3xl font-semibold text-center mb-5 '>Cash Out From Agent</h3>
//             <div className='shadow-2xl p-5 md:w-1/2 my-4 mx-auto bg-gradient-to-r from-[#4e63b8] to-gray-300 rounded-xl'>
//                 <form onSubmit={handleSubmit(onSubmit)} className='space-y-2 text-2xl'>
//                 <div className='form-control md:w-3/4 mx-auto'>
//                         <label htmlFor="">User Account</label>
//                         <input type='text' className='input input-bordered mt-2' {...register("userAccount", { minLength: 11, maxLength: 11 })} defaultValue={isUserInfo && isUserInfo.number ? isUserInfo.number : ''}placeholder='Enter User Account Number' />
//                         {errors.userAccount && <span className='mt-3 text-red-600'>Please input correct account number!</span>}
//                     </div>
//                     <div className='form-control md:w-3/4 mx-auto'>
//                         <label htmlFor="">Agent Account</label>
//                         <input type='text' className='input input-bordered mt-2' {...register("agentAccount", { minLength: 11, maxLength: 11 })}  placeholder='Enter Agent Account Number' />
//                         {errors.agentAccount && <span className='mt-3 text-red-600'>Please input correct account number!</span>}
//                     </div>
//                     <div className='form-control md:w-3/4 mx-auto'>
//                         <label htmlFor="">Amount</label>
//                         <input type='number' className='input input-bordered mt-2' {...register("amount", { minLength: 3, maxLength: 6 })} placeholder='Enter Amount' />
//                         {errors.amount && <span className='mt-3 text-red-600'>Please input correct value!</span>}
//                     </div>
//                     <div className='form-control md:w-3/4 mx-auto'>
//                         <input type="submit" className=' bg-[#4e63b8] p-2 my-5 border-0 rounded-xl mb-4' value="Cash Out" />
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default UserCashOut;