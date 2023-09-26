import { useForm } from 'react-hook-form'
import useUser from '../../../../Hook/useUser';
import Swal from 'sweetalert2';


export default function RequestPayment() {

    const [user] = useUser();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {

        data.senderName = user?.name;
        data.senderNumber = user?.number;

        fetch('https://eager-getup-colt.cyclic.cloud/requestpayment', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.modifiedCount == 1) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: "Request sent.",
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
                reset();
            })
    }



    return (
        <div className='p-2 md:m-4 mb-28 pb-10 md:mt-10'>
            <p className='text-4xl font-semibold text-center mb-7 '>Request Add Money</p>
            <div className='shadow-2xl p-5 lg:w-1/2 my-4 mx-auto bg-white bg-opacity-20 backdrop-blur-md  rounded-xl'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 text-2xl'>
                    <div className='form-control md:w-3/4 mx-auto'>
                        <label htmlFor="">Request User</label>
                        <input required type='number' className='input input-bordered mt-2' {...register("receiver")} placeholder='Enter User Account Number' />
                    </div>
                    <div className='form-control md:w-3/4 mx-auto'>
                        <label htmlFor="">Requested ammount</label>
                        <input required type='number' className='input input-bordered mt-2' {...register("amount")} placeholder='Enter Requested Amount' />
                    </div>
                    <div className='form-control md:w-3/4 mx-auto'>
                        <label htmlFor="">Message</label>
                        <textarea required type='text' className='mt-2 p-1' {...register("message")} placeholder='Write Message' />
                    </div>

                    <div className='form-control md:w-3/4 mx-auto'>
                        <input type="submit" className=" cursor-pointer hover:bg-[#044fb7d8] bg-[#044EB7] text-white p-2 rounded-lg mt-2 mb-5" value="Request" />
                    </div>
                </form>
            </div>
            {/* <form onSubmit={handleSubmit(onSubmit)} className=' mx-auto md:px-20 '>
                <div className='form-control md:w-3/4 mx-auto'>
                    <label htmlFor="">Request User</label>
                    <input required type='number' className='input input-bordered mt-2' {...register("receiver")} placeholder='Enter User Account Number' />
                </div>
                <div className='form-control md:w-3/4 mx-auto'>
                    <label htmlFor="">Requested ammount</label>
                    <input required type='number' className='input input-bordered mt-2' {...register("amount")} placeholder='Enter Requested Amount' />
                </div>
                <div className='form-control md:w-3/4 mx-auto'>
                    <label htmlFor="">Message</label>
                    <textarea required type='text' className='mt-2 p-1' {...register("message")} placeholder='Write Message' />
                </div>
                
                <div className='form-control md:w-3/4 mx-auto pt-5'>
                    <button type="submit" className='cursor-pointer hover:bg-[#044fb7d8] bg-[#044EB7] text-white p-2 rounded-lg mt-2 mb-5'>Request</button>
                </div>
            </form> */}
        </div>
    )
}