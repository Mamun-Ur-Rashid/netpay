import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hook/useAxiosSecure';


const DashSendMoney = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const [isUserInfo, setUserInfo] = useState(false);

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


        const sendMoneyInfo = { sdn: senderNumber, rcn: receiverNumber, tk: amount, transactionName: "Send Money" };

        fetch("https://tasty-gray-goshawk.cyclic.cloud/sendmoney", {
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
                    position: 'top-center',
                    icon: 'success',
                    title: 'Send Money Successfully Completed!',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                console.error('Error:', error.message);
            });

        setIsSubmitted(true);
        event.target.reset();
    };




    return (
        <div className="p-6 lg:p-0 md:m-12">
            <h1 className="text-4xl font-semibold text-center mb-7 ">Send Money</h1>
            <div className="shadow-2xl p-8 lg:w-3/4 my-4 mx-auto bg-white bg-opacity-20 backdrop-blur-md rounded-xl">
                <form action="" onSubmit={sendMoney} className="space-y-4 text-2xl">
                    <div className="form-control md:w-3/4 mx-auto">
                        <label htmlFor="">Sender Number</label>
                        <input
                            type="text" disabled
                            defaultValue={isUserInfo?.number}
                            name="senderNumber"
                            placeholder="Sender Number"
                            className="input input-bordered mt-2"
                        />
                    </div>
                    <div className="form-control md:w-3/4 mx-auto ">
                        <label htmlFor="">Receiver Number</label>
                        <input
                            type="number"
                            name="receiverNumber"
                            placeholder="Receiver Number"
                            className="input input-bordered mt-2 "
                        />
                    </div>
                    <div className="form-control md:w-3/4 mx-auto">
                        <label htmlFor="">Type Amount</label>
                        <input
                            type="number"
                            name="amount"
                            placeholder="Amount"
                            className="input input-bordered mt-2 "
                        />
                    </div>
                    <div className="form-control md:w-3/4 mx-auto">
                        <input
                            type="submit"
                            className="bg-[#4e63b8] p-2 my-5 border-0 rounded-xl mb-6 text-white cursor-pointer"
                            value="Send Money"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DashSendMoney;
