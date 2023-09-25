import {useForm} from 'react-hook-form'
import useUser from '../../../../Hook/useUser';
import Swal from 'sweetalert2';


export default function RequestPayment() {

    const [user] = useUser();
    const {register,handleSubmit,reset} = useForm();

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
            if(data?.modifiedCount == 1){
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



    return(
        <div className='md:w-3/4 p-1 rounded-xl mx-auto shadow-xl bg-white bg-opacity-20 backdrop-blur-md'>
            <div>
                <p className='text-center font-bold text-3xl my-10'>Request Payment</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className=' mx-auto md:px-20 '>
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
            </form>
        </div>
    )
}