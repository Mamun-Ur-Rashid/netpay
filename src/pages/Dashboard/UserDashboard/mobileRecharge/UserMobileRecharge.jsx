import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useUser from '../../../../Hook/useUser';
import Swal from 'sweetalert2';

const UserMobileRecharge = () => {
    const [isUserInfo] = useUser();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    useEffect(() => {
        // If you no longer need totalBalance in this component, you can remove this block.
    }, [isUserInfo]);

    const onSubmit = async (data) => {
        try {
            const response = await fetch('https://red-quaint-snail.cyclic.app/mobileRecharge', {
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
        <div className='p-2 md:m-12 '>
            <h3 className='text-4xl font-semibold text-center mb-7 '>Mobile Recharge</h3>
            <div className='shadow-2xl p-5 md:w-3/4 my-4 mx-auto bg-gradient-to-r from-[#4e63b8] to-gray-300 rounded-xl'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 text-2xl'>
                    <div className='form-control md:w-3/4 mx-auto'>
                        <label htmlFor="">Mobile Number</label>
                        <input type='text' className='input input-bordered mt-2' {...register("MobileNumber", { minLength: 11, maxLength: 11 })} placeholder='Enter Mobile Number' />
                        {errors.mobileNumber && <span className='mt-3 text-red-600'>Wrong Mobile Number</span>}
                    </div>
                    <div className='form-control md:w-3/4 mx-auto'>
                        <label htmlFor="">Amount</label>
                        <input type='number' className='input input-bordered mt-2' {...register("cashOutAmount", { minLength: 3, maxLength: 6 })} placeholder='Enter Amount' />
                        {errors.amount && <span className='mt-3 text-red-600'>Please input correct value!</span>}
                    </div>
                    <div className='form-control md:w-3/4 mx-auto'>
                        <label htmlFor="">My Account</label>
                        <input type='text' className='input input-bordered mt-2' disabled defaultValue={isUserInfo?.number} {...register("userAccount", { maxLength: 11 })} placeholder='Enter my Account Number' />
                        {errors.userAccount && <span className='mt-3 text-red-600'>Please input correct account number!</span>}
                    </div>
                    <div className='form-control md:w-3/4 mx-auto'>
                        <input type="submit" className=" bg-[#4e63b8] p-2 rounded-lg mt-2 mb-5" value="Mobile Recharge" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserMobileRecharge;
