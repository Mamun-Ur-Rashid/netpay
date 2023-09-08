import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hook/useAxiosSecure';

const UserSendMoney = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const [isUserInfo, setUserInfo ] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosSecure.get(`/allUsers/${user?.email}`);
                setUserInfo(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, [user]);


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
                position: 'top-end',
                icon: 'success',
                title: 'Send Money Successfully Completed!',
                showConfirmButton: false,
                timer: 1500
              })
        })
        .catch(error => {
            console.error('Error:', error);
        });
        
        setIsSubmitted(true);
        event.target.reset();
    };

    
    
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axiosSecure.get(`/allUsers/${user?.email}`);
    //             setUserInfor(response.data);
    //         } catch (error) {
    //             console.error('Error fetching user data:', error);
    //         }
    //     };

    //     fetchData();
    // }, [user]);

    return (
        <div className=" text-center mb-40 mt-8">
            <h1 className="text-4xl mt-4 font-bold">Send Money</h1>
            <div className="pl-4 mt-4 md:w-3/4 mx-auto shadow-2xl bg-slate-400 rounded-lg">
                <form action="" onSubmit={sendMoney} className='md:w-3/4 mx-auto md:px-20 mt-5'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-bas mt-8">Sender Number</span>
                        </label>
                        <input type="text" defaultValue={isUserInfo?.number} name="senderNumber" placeholder="Sender Number" className="input input-bordered w-full text-black max-w-xs" />
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
                    <div className="mt-4 form-control">
                        <input type="submit" className="bg-[#1ba8c6] w-1/2 ml-14 p-2 rounded-lg mb-10" />
                    </div>
                </form>
               
            </div>
        </div>
    );
};

export default UserSendMoney;
