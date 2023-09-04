import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hook/useAxiosSecure';

const DashSendMoney = () => {
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

        fetch(`http://localhost:3000/sendmoney`, {
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

    
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosSecure.get(`/allUsers/${user?.email}`);
                setUserInfor(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, [user]);

    return (
        <div className=" text-center mb-40">
            <div>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-1 mr-5 mt-6 text-white'>
                <div className='m-5 pl-3 pt-4 w-[90%] h-38 bg-[#33C49D] rounded-xl text-2xl'>
                   <p className='text-center font-bold pb-4'> Total Users <br /> <small className='text-5xl'>{isUserInfo.length}</small></p> 
                </div>
                <div className='m-5 pl-3 pt-8 w-[90%] h-38 bg-[#C44933] rounded-xl'>
                    <p className='text-center font-bold pb-4'> Total Transactions </p>
                </div>
                <div className='m-5 pl-3 pt-8 w-[90%] h-38 bg-[#3348C4] rounded-xl'> 
                    <p className='text-center font-bold pb-4'>  Total Agents </p>
                </div>
                <div className='m-5 mr-5 pl-3 pt-8 w-[90%] h-38 bg-[#0F101A] rounded-xl'> 
                    <p className='text-center font-bold pb-4'>   Total Amount <br /> <small className='text-5xl'> {isUserInfo.balance} Tk</small>
                     </p>
                </div>
            </div>
            </div>
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

export default DashSendMoney;
