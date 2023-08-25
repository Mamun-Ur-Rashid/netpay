import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const DashSendMoney = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const {userInfor} = useContext(AuthContext)

    const sendMoney = (event) => {
        event.preventDefault();
        const senderNumber = event.target.senderNumber.value;
        const receiverNumber = event.target.receiverNumber.value;
        const amount = event.target.amount.value;
        

        const sendMoneyInfo = { sdn: senderNumber, rcn: receiverNumber, tk: amount };

        fetch(`https://netpay-server-muhammadali246397.vercel.app/sendmoney`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(sendMoneyInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: `${data.message}`,
                showConfirmButton: false,
                timer: 2000
            })
        })
        .catch(error => {
            console.error('Error:', error);
        });
        
        setIsSubmitted(true);
        event.target.reset();
    };

    return (
        <div className="text-white text-center">
            <h1 className="text-4xl py-3 font-bold bg-[#1ba8c6]">Send Money</h1>
            <div className="pl-4 mt-4">
                <form action="" onSubmit={sendMoney}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base text-white">Sender Number</span>
                        </label>
                        <input type="text" defaultValue={userInfor?.number} name="senderNumber" placeholder="Sender Number" className="input input-bordered w-full text-black max-w-xs" />
                    </div>
                    <div className="form-control py-2">
                        <label className="label">
                            <span className="label-text text-base text-white">Receiver Number</span>
                        </label>
                        <input type="text" name="receiverNumber" placeholder="Receiver Number" className="input input-bordered text-black w-full max-w-xs" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base text-white">Type Amount</span>
                        </label>
                        <input type="text" name="amount" placeholder="Amount" className="input input-bordered w-full text-black max-w-xs" />
                    </div>
                    <div className="mt-4">
                        <input type="submit" className="bg-[#1ba8c6] w-20 h-10" />
                    </div>
                </form>
               
            </div>
        </div>
    );
};

export default DashSendMoney;
