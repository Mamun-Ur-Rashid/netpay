import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useUser from '../../../../Hook/useUser';

const AdminAddMoney = () => {

    const [isUserInfo] = useUser();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();


    const onSubmit = async (data) => {
        data.adminAccount=isUserInfo?.number
        try {
            const response = await fetch('https://eager-getup-colt.cyclic.cloud/adminAddMoney', {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const responseData = await response.json();

                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: `${responseData.message}`,
                    showConfirmButton: false,
                    timer: 1500
                });

                reset();
            } else {
                console.error('Failed to send money');
            }
        } catch (error) {
            console.error('An error occurred', error);
        }
    };
    return (
        <div className='p-2 md:m-4 mb-28 pb-10'>
            <div>
                <p className='text-center text-2xl font-bold'>Admin From Agent</p>
            </div>
            <h3 className='text-3xl font-semibold text-center mb-5 '>Add Money</h3>
            <div className='shadow-2xl p-5 md:w-1/2 my-4 mx-auto bg-white bg-opacity-20 backdrop-blur-md  rounded-xl'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-2 text-2xl'>
                    <div className='form-control md:w-3/4 mx-auto'>
                        <label htmlFor="">Admin Account</label>
                        <input type='text' className='input input-bordered mt-2' {...register("adminAccount", { minLength: 11, maxLength: 11 })} disabled defaultValue={isUserInfo && isUserInfo.number ? isUserInfo.number : ''} placeholder='Enter Admin Account Number' />
                        {errors.adminAccount && <span className='mt-3 text-red-600'>Please input correct account number!</span>}
                    </div>
                    <div className='form-control md:w-3/4 mx-auto'>
                        <label htmlFor="">Agent Account</label>
                        <input type='text' className='input input-bordered mt-2' {...register("agentAccount", { minLength: 11, maxLength: 11 })} placeholder='Enter Agent Account Number' />
                        {errors.agentAccount && <span className='mt-3 text-red-600'>Please input correct account number!</span>}
                    </div>
                    <div className='form-control md:w-3/4 mx-auto'>
                        <label htmlFor="">Amount</label>
                        <input type='number' className='input input-bordered mt-2' {...register("amount", { minLength: 3, maxLength: 6 })} placeholder='Enter Amount' />
                        {errors.amount && <span className='mt-3 text-red-600'>Please input correct value!</span>}
                    </div>
                    <div className='form-control md:w-3/4 mx-auto'>
                        <input type="submit" className=' bg-[#4e63b8] p-2 my-5 border-0 rounded-xl mb-4' value="Add Money" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminAddMoney;