import React from 'react';
import { useForm } from 'react-hook-form';
import useUser from '../../../../Hook/useUser';
import Swal from 'sweetalert2';


const MakePayment = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [user] = useUser();
    const onSubmit =async (data) =>{
        data.userNumber = user?.number;
        data.transactionName = "Make Payment";
        try {
            const response = await fetch('https://tasty-gray-goshawk.cyclic.cloud/makePayment', {
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
                console.error('Failed to Payment');
            }
        } catch (error) {
            console.error('An error occurred', error);
        }
    };

    return (
        <div className='p-2 md:m-4 mb-28 pb-10'>
            <h3 className='text-center text-2xl font-bold'>Make Payment</h3>
            <div className='shadow-2xl p-5 md:w-1/2 my-4 mx-auto bg-white bg-opacity-20 backdrop-blur-md  rounded-xl'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-2 text-2xl'>
                    
                    <div className='form-control md:w-3/4 mx-auto'>
                        <label htmlFor="">Merchant Account</label>
                        <input type='text' className='input input-bordered mt-2' {...register("merchantNumber", { minLength: 11, maxLength: 11 })} placeholder='Enter Merchant Account Number' />
                        {errors.merchantNumber && <span className='mt-3 text-red-600'>Wrong Merchant Number</span>}
                    </div>
                    <div className='form-control md:w-3/4 mx-auto'>
                        <label htmlFor="">Amount</label>
                        <input type='number' className='input input-bordered mt-2' {...register("amount", { minLength: 3, maxLength: 6 })} placeholder='Enter Amount' />
                        {errors.amount && <span className='mt-3 text-red-600'>Please input correct value!</span>}
                    </div>
                    
                    <div className='form-control md:w-3/4 mx-auto'>
                        <input type="submit" className=" bg-[#4e63b8] p-2 rounded-xl mt-2 mb-4" value="Payment" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MakePayment;