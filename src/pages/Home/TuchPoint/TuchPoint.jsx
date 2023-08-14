import React from 'react';
import image from '../../../assets/login.png'

const TuchPoint = () => {
    return (
        <div className='container mx-auto my-20'>
            <h1 className="text-center font-bold text-5xl my-5"><span className="border-b-4 border-orange-700 text-orange-700">Nearest NetPay Touchpoints</span></h1>

            <div className='md:flex justify-between mt-20'>
                <div className='md:w-[30%] px-4'>
                    <div className='text-center'>
                        <h4 className='text-3xl font-semibold'>ATM Cash Out Points</h4>
                        <p className='text-2xl mt-4'>List of Partner Banks' ATM booths to Cash Out</p>
                    </div>
                    <div>
                        <img className='mx-auto' src={image} alt="" />
                    </div>
                </div>
                <div className='md:w-[30%] px-4'>
                    <div className='text-center'>
                        <h4 className='text-3xl font-semibold'>Customer Care Points</h4>
                        <p className='text-2xl mt-4'>List of Netpay Customer Care Centers</p>
                    </div>
                    <div>
                    <img className='mx-auto' src={image} alt="" />
                    </div>
                </div>
                <div className='md:w-[30%] px-4'>
                    <div className='text-center'>
                        <h4 className='text-3xl font-semibold'>Netpay Mercchants</h4>
                        <p className='text-2xl mt-4'>List of Merchants that accepts Netpay Payment</p>
                    </div>
                    <div>
                    <img className='mx-auto' src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TuchPoint;