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

        fetch("https://eager-getup-colt.cyclic.cloud/sendmoney", {
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
        <div className="p-2 md:m-4 mb-28 pb-10 mt-10">
            <h1 className="text-4xl text-center mb-6  font-bold">Send Money</h1>
            <div className="shadow-2xl p-5 lg:w-1/2 my-4 mx-auto bg-white bg-opacity-20 backdrop-blur-md  rounded-xl">
                <form action="" onSubmit={sendMoney} className="md:w-3/4 mx-auto  text-lg">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text mt-2">Sender Number</span>
                        </label>
                        <input
                            type="text" disabled
                            defaultValue={isUserInfo?.number}
                            name="senderNumber"
                            placeholder="Sender Number"
                            className="input input-bordered text-black"
                        />
                    </div>
                    <div className="form-control w-full py-2">
                        <label className="label">
                            <span className="label-text ">Receiver Number</span>
                        </label>
                        <input
                            type="number"
                            name="receiverNumber"
                            placeholder="Receiver Number"
                            className="input input-bordered text-black w-full "
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text ">Type Amount</span>
                        </label>
                        <input
                            type="number"
                            name="amount"
                            placeholder="Amount"
                            className="input input-bordered text-black w-full"
                        />
                    </div>
                    <div className="form-control w-full">
                        <input
                            type="submit"
                            className="cursor-pointer hover:bg-[#044fb7d8] bg-[#044EB7] text-white p-2 rounded-lg mt-8 mb-5"
                            value="Send Money"
                        />
                    </div>
                </form>
            </div>
            </div>
    );
};
  export default DashSendMoney;
