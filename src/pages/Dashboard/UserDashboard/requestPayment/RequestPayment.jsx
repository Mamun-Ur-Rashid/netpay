import {useForm} from 'react-hook-form'
import useUser from '../../../../Hook/useUser';
import Swal from 'sweetalert2';


export default function RequestPayment() {

    const [user] = useUser();
    const {register,handleSubmit,reset} = useForm();

    const onSubmit = (data) => {

        data.senderName = user?.name;
        data.senderNumber = user?.number;

        fetch('https://vast-rose-seahorse-hem.cyclic.cloud/requestpayment', {
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
        <div className=''>
            <form onSubmit={handleSubmit(onSubmit)} className='md:w-3/4 mx-auto md:px-20 mt-20'>
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
                    <button type="submit" className='bg-transparent hover:bg-[#4e63b8] font-semibold hover:text-white py-[6px] px-4 border border-blue-500 hover:border-transparent rounded mb-6'>Request</button>
                </div>
            </form>
        </div>
    )
}