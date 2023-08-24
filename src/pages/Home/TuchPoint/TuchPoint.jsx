import image from '../../../assets/login.png'

const TuchPoint = () => {
    return (
        <div className='container mx-auto  md:my-12'>
            <h1 className="text-center font-bold text-4xl md:text-5xl text-red-600">Nearest NetPay Touchpoints</h1>

            <div className='md:flex justify-between mt-6 md:mt-10 bg-[#1B2654] p-8 md:p-14 '>
                <div className='w-full md:w-[30%] px-4'>
                    <div className='text-center text-white'>
                        <h4 className='text-2xl md:text-4xl font-semibold'>ATM Cash Out Points</h4>
                        <p className='text-sm md:text-xl my-2'>List of Partner Banks&apos; ATM booths to Cash Out</p>
                    </div>
                    <div>
                        <img className='mx-auto' src={image} alt="" />
                    </div>
                </div>
                <div className='md:w-[30%] px-4 py-10 md:py-0'>
                    <div className='text-center text-white'>
                        <h4 className='text-2xl md:text-4xl font-semibold'>Customer Care Points</h4>
                        <p className='text-sm md:text-xl my-2'>List of Netpay Customer Care Centers</p>
                    </div>
                    <div>
                        <img className='mx-auto' src={image} alt="" />
                    </div>
                </div>
                <div className='md:w-[30%] px-4'>
                    <div className='text-center text-white'>
                        <h4 className='text-2xl md:text-4xl font-semibold'>Netpay Mercchants</h4>
                        <p className='text-sm md:text-xl my-2'>List of Merchants that accepts Netpay Payment</p>
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