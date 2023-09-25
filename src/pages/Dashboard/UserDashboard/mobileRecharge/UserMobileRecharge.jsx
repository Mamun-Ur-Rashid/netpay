import React from 'react';
import { useForm } from 'react-hook-form';
import useUser from '../../../../Hook/useUser';
import Swal from 'sweetalert2';

const UserMobileRecharge = () => {
    const [isUserInfo] = useUser();
    const { register, handleSubmit, formState: { errors }, reset, setError } = useForm();

    const onSubmit = async (data) => {
        data.transactionName = 'Mobile Recharge';
        data.userAccount= isUserInfo?.number;
        const { sim, mobileNumber } = data;
        const simFirst3Digits = {
            banglalink: ['019', '014'],
            grameenPhone: '017',
            robi: '018',
            telitalk: '015',
            airtel: '016',
        };

        if (Array.isArray(simFirst3Digits[sim])) {
            if (!simFirst3Digits[sim].includes(mobileNumber.substring(0, 3))) {
                setError('mobileNumber', {
                    type: 'manual',
                    message: 'Invalid Number!',
                });
                return;
            }
        } else if (simFirst3Digits[sim] !== mobileNumber.substring(0, 3)) {
            setError('mobileNumber', {
                type: 'manual',
                message: 'Invalid Number!',
            });
            return;
        }

        try {
            const response = await fetch('https://eager-getup-colt.cyclic.cloud/mobileRecharge', {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const responseData = await response.json();

                Swal.fire({
                    position: 'center',
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
        <div className='p-6 lg:p-0 md:m-12'>
            <h3 className='text-4xl font-semibold text-center mb-7 '>Mobile Recharge</h3>
            <div className='shadow-2xl p-4 lg:p-8 lg:w-3/4 my-4 mx-auto bg-white bg-opacity-20 backdrop-blur-md rounded-xl'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 text-2xl'>
                    <div className='form-control md:w-3/4 mx-auto'>
                        <label className='rounded p-2 mt-2'>Select Your Sim</label>
                        <select className='p-3 rounded-lg text-sm' {...register("sim")}>
                            <option disabled>Select Your Sim</option>
                            <option value="banglalink">Banglalink</option>
                            <option value="grameenPhone">GrameenPhone</option>
                            <option value="robi">Robi</option>
                            <option value="telitalk">Telitalk</option>
                            <option value="airtel">Airtel</option>
                        </select>
                    </div>
                    <div className='form-control md:w-3/4 mx-auto'>
                        <div className='form-control'>
                            <label htmlFor="">Mobile Number</label>
                            <input type='text' className='input input-bordered mt-2' {...register("mobileNumber", { minLength: 11, maxLength: 11 })} placeholder='Enter Mobile Number' />
                            {errors.mobileNumber && <span className='mt-3 text-red-400'>{errors.mobileNumber.message}</span>}
                        </div>
                    </div>
                    <div className='form-control md:w-3/4 mx-auto'>
                        <div className='form-control '>
                            <label htmlFor="">Amount</label>
                            <input type='number' className='input input-bordered mt-2' {...register("amount", { minLength: 2, maxLength: 6 })} placeholder='Enter Amount' />
                            {errors.amount && <span className='mt-3 text-red-600'>{errors.amount.message}</span>}
                        </div>
                    </div>
                    {/* <div className='form-control md:w-3/4 mx-auto'>
                        <label htmlFor="">My Account</label>
                        <input type='text' className='input input-bordered mt-2' defaultValue={isUserInfo?.number} {...register("userAccount", { maxLength: 11 })} placeholder='Enter my Account Number' />
                        {errors.userAccount && <span className='mt-3 text-red-600'>{errors.userAccount.message}</span>}
                    </div> */}
                    <div className='form-control md:w-3/4 mx-auto'>
                        <input type="submit" className=" cursor-pointer hover:bg-[#044fb7d8] bg-[#044EB7] text-white p-2 rounded-lg mt-2 mb-5" value="Mobile Recharge" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserMobileRecharge;
