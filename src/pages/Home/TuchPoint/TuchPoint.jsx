// import image from '../../../assets/login.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Title from '../../../shared/title/Title';

const TuchPoint = () => {

    Aos.init();

    const atmImg = 'https://img.freepik.com/free-vector/queue-people-standing-using-atm_74855-4812.jpg?w=360'
    const castumerImg = 'https://www.revechat.com/wp-content/uploads/2020/06/Online-customer-service-1280x720.png'
    const marchentImg = 'https://miro.medium.com/v2/resize:fit:1400/1*34GfkhLFydPjZWUde1EzRg.jpeg'

    return (
        <div className='container mx-auto  md:my-12 pt-14'>
            <div data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-delay="100">
                <Title title={'Our Touchpoints'} subTitle={'Discover Nearest Convenient Locations for Accessing NetPay Services.'}></Title>
            </div>
            <div className='md:flex justify-between mt-4 md:mt-10 gap-9  '>
                <div
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-delay="200" className='w-full md:w-1/3  md:py-0  h-96 rounded-xl border border-blue-600 mb-5 md:mb-0'>
                    <div className='text-center p-4'>
                        <h4 className='text-3xl font-semibold'>ATM Cash Out Points</h4>
                        <p className='text-sm md:text-base py-2'>List of Partner Banks&apos; ATM booths to Cash Out</p>
                    </div>
                    <div >
                        <img className='mx-auto w-fit h-50' src={atmImg} alt="" />
                    </div>
                </div>
                <div
                    data-aos="zoom-out"
                    data-aos-duration="1000"
                    data-aos-delay="300" className='w-full md:w-1/3 px-4 mb-5 md:mb-0 h-96 rounded-xl border border-blue-600'>
                    <div className='text-center p-4 '>
                        <h4 className='text-3xl font-semibold'>Customer Care Points</h4>
                        <p className='text-sm md:text-base py-2'>List of Netpay Customer Care Centers service</p>
                    </div>
                    <div>
                        <img className='mx-auto' src={castumerImg} alt="" />
                    </div>
                </div>
                <div
                    data-aos="zoom-out"
                    data-aos-duration="1000"
                    data-aos-delay="400" className='w-full md:w-1/3 px-4 mb-10 md:py-0 rounded-xl border border-blue-600 h-[400px] md:h-96'>
                    <div className='text-center p-4 '>
                        <h4 className='text-3xl font-semibold'>Netpay Mercchants</h4>
                        <p className='text-sm md:text-base py-2'>List of Merchants that accepts Netpay Payment</p>
                    </div>
                    <div>
                        <img className='mx-auto' src={marchentImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TuchPoint;