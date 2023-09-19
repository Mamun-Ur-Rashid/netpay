import React from 'react';
import { FaRegLightbulb, FaWifi } from 'react-icons/fa';
import { BsFire } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const BillPayment = () => {
    const [hidden, setHidden] = useState(false)
    const [gashidden, setGasHidden] = useState(false)
    const [nethidden, setNetHidden] = useState(false)


    const onClick = () => {
        setHidden(true)
        gashidden(false)
        setNetHidden(false)
    }

    const Gashidden = () => {
        setGasHidden(true)
        setHidden(false)
        setNetHidden(false)
    }
    const Nethidden = () => {
        setNetHidden(true)
        setGasHidden(false)
        setHidden(false)
        
    }

    return (
        <div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-1 mr-5 mt-6 text-white'>
                <div>

                    <button onClick={onClick} className='w-full' >
                        <div className='m-5 pl-3 pt-4 w-[90%] h-38 bg-[#33C49D] rounded-xl text-2xl'>

                            <FaRegLightbulb className='mx-auto my-3 text-3xl'></FaRegLightbulb>

                            <p className='text-center font-bold pb-4'> Electricity Bill</p>
                        </div>
                    </button>
                    {
                        hidden &&
                        <div className='mt-5 bg-[#33C49D] w-[90%] mx-auto rounded-md px-3 py-4'>
                            <p className='text-center font-bold font-2xl my-2'>Select Industry</p>
                            <Link to='/dashboard/billPayment/electricityBill' className='my-2 bg-[#4e63b8] px-3 rounded-md leading-10 hover:bg-[#1a349e] py-1'>Polli Bidyut (postpaid)</Link> <br />
                            <Link to='/dashboard/billPayment/electricityBill' className='my-2 bg-[#4e63b8] px-3 rounded-md leading-10 hover:bg-[#1a349e] py-1'>DESCO (prepaid)</Link> <br />
                            <Link to='/dashboard/billPayment/electricityBill' className='my-2 bg-[#4e63b8] px-3 rounded-md leading-10 hover:bg-[#1a349e] py-1'>Polli Bidyut (prepaid)</Link> <br />
                            <Link to='/dashboard/billPayment/electricityBill' className='my-2 bg-[#4e63b8] px-3 rounded-md leading-10 hover:bg-[#1a349e] py-1'>DESCO (postpaid)</Link> <br />
                            <Link to='/dashboard/billPayment/electricityBill' className='my-2 bg-[#4e63b8] px-3 rounded-md leading-10 hover:bg-[#1a349e] py-1'>BPDB (postpaid)</Link>
                        </div>
                    }

                </div>
                <div>
                    {/*  */}
                    <button onClick={Gashidden} className='w-full'>
                        <div className='m-5 pl-3 pt-4 w-[90%] h-38 bg-[#C44933] rounded-xl text-2xl'>
                            <div>
                                <BsFire className='mx-auto my-3 text-3xl'></BsFire>
                            </div>
                            <p className='text-center font-bold pb-4'>Gas Bill </p>
                        </div>
                    </button>
                    {
                        gashidden &&
                        <div className='mt-5 bg-[#C44933] w-[90%] mx-auto rounded-md px-3 py-4'>
                            <p className='text-center font-bold font-2xl my-2'>Select Industry</p>
                            <Link to='/dashboard/billPayment/gasBill' className='my-2 bg-[#2949c7] px-3 rounded-md leading-10 hover:bg-[#1a349e] py-1'>Titas Gas Postpaid (Non-metered)</Link> <br />
                            <Link to='/dashboard/billPayment/gasBill' className='my-2 bg-[#2949c7] px-3 rounded-md leading-10 hover:bg-[#1a349e] py-1'>Titas Gas Postpaid (Metered)</Link> <br />
                            <Link to='/dashboard/billPayment/gasBill' className='my-2 bg-[#2949c7] px-3 rounded-md leading-10 hover:bg-[#1a349e] py-1'>KIarnaphuli Gas</Link> <br />
                            <Link to='/dashboard/billPayment/gasBill' className='my-2 bg-[#2949c7] px-3 rounded-md leading-10 hover:bg-[#1a349e] py-1'>Sundarban Gas</Link> <br />
                            <Link to='/dashboard/billPayment/gasBill' className='my-2 bg-[#2949c7] px-3 rounded-md leading-10 hover:bg-[#1a349e] py-1'>Bashundha LP gas Ltd (metered)</Link>
                        </div>
                    }
                </div>
                {/* to='/dashboard/billPayment/networkBill' */}
                <div>
                    <button onClick={Nethidden} className='w-full' >
                        <div className='m-5 mr-5 pl-3 pt-4 w-[90%] h-38 bg-[#0F101A] rounded-xl text-2xl'>
                            <div>
                                <FaWifi className='mx-auto my-3 text-3xl'></FaWifi>
                            </div>
                            <p className='text-center font-bold pb-4'> Internet Bill </p>
                        </div>
                    </button>
                    {
                        nethidden &&
                        <div className='mt-5 bg-[#0F101A] w-[90%] mx-auto rounded-md px-3 py-4'>
                            <p className='text-center font-bold font-2xl my-2'>Select Industry</p>
                            <Link to='/dashboard/billPayment/gasBill' className='my-2 bg-[#2949c7] px-3 rounded-md leading-10 hover:bg-[#1a349e] py-1'>Link3 Internet</Link> <br />
                            <Link to='/dashboard/billPayment/gasBill' className='my-2 bg-[#2949c7] px-3 rounded-md leading-10 hover:bg-[#1a349e] py-1'>Amber IT Internet</Link> <br />
                            <Link to='/dashboard/billPayment/gasBill' className='my-2 bg-[#2949c7] px-3 rounded-md leading-10 hover:bg-[#1a349e] py-1'>Carnival Internet</Link> <br />
                            <Link to='/dashboard/billPayment/gasBill' className='my-2 bg-[#2949c7] px-3 rounded-md leading-10 hover:bg-[#1a349e] py-1'>SamOnline Internet</Link> <br />
                            <Link to='/dashboard/billPayment/gasBill' className='my-2 bg-[#2949c7] px-3 rounded-md leading-10 hover:bg-[#1a349e] py-1'>Triangle Internet</Link> <br />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default BillPayment;