import image from '../../../assets/login.png'

const TuchPoint = () => {
    return (
        <div className='container mx-auto  md:my-12'>
            <h1 className="text-center font-bold text-4xl md:text-5xl text-red-600">Nearest NetPay Touchpoints</h1>

            <div className='md:flex justify-between mt-4 md:mt-10 gap-9 '>
                <div className='w-full md:w-1/3  px-4 py- md:py-0 bg-[#1B2654] h-96'>
                    <div className='text-center p-4 text-white '>
                        <h4 className='text-3xl font-semibold'>ATM Cash Out Points</h4>
                        <p className='text-sm md:text-base py-2'>List of Partner Banks&apos; ATM booths to Cash Out</p>
                    </div>
                    <div >
                        <img className='mx-auto ' src={image} alt="" />
                    </div>
                </div>
                <div className='w-full md:w-1/3 px-4 md:py-0 bg-[#1B2654] h-96'>
                    <div className='text-center p-4 text-white '>
                        <h4 className='text-3xl font-semibold'>Customer Care Points</h4>
                        <p className='text-sm md:text-base py-2'>List of Netpay Customer Care Centers service</p>
                    </div>
                    <div>
                        <img className='mx-auto' src={image} alt="" />
                    </div>
                </div>
                <div className='w-full md:w-1/3 px-4 mb-10 md:py-0 bg-[#1B2654] h-[400px] md:h-96'>
                    <div className='text-center p-4 text-white'>
                        <h4 className='text-3xl font-semibold'>Netpay Mercchants</h4>
                        <p className='text-sm md:text-base py-2'>List of Merchants that accepts Netpay Payment</p>
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