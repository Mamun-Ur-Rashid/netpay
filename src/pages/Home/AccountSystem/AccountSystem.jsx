import nid from '../../../assets/nid.jpg'
import photo from '../../../assets/photo.jpg'
import password from '../../../assets/pincode.png'
import Title from '../../../shared/title/Title';

const AccountSystem = () => {
    return (
        <div className='container mx-auto pb-10 md:pb-14 mt-10 md:mt-14'>
            <Title title={'Create Netpay Account'} subTitle={'Easy 3 steps to create your Netpay account'}></Title>
            <div className=" mt-2 md:flex justify-between md:gap-x-8 ">

                <div className='bg-[#1B2654] p-8 md:w-1/3 sm:mt-5 px-4'>
                    <div className=''>
                        <img className='mx-auto w-[164px] h-[164px]' src={nid} alt="" />
                    </div>
                    <div style={{ borderRadius: "80px 0px 80px 0px", boxShadow: "1px 1px 5px 2px" }} className='w-full h-20 mt-4 flex items-center justify-between text-white'>
                        <p className='md:text-xl ml-8  font-bold text-center text-white'>Give your national id number </p>
                    </div>
                </div>

                <div className='bg-[#1B2654] p-8 md:w-1/3 sm:mt-5 px-4'>
                    <div className=''>
                        <img className='mx-auto w-[164px] h-[164px]' src={photo} alt="" />
                    </div>
                    <div style={{ borderRadius: "80px 0px 80px 0px", boxShadow: "1px 1px 5px 2px" }} className='w-full h-20 mt-4 flex items-center justify-between text-white'>
                        <p className='md:text-xl ml-16 font-bold text-center text-white'>Upload your photo </p>
                    </div>
                </div>
                <div className='bg-[#1B2654] p-8 md:w-1/3 sm:mt-5 px-4'>
                    <div className=''>
                        <img className='mx-auto w-[164px] h-[164px]' src={password} alt="" />
                    </div>
                    <div style={{ borderRadius: "80px 0px 80px 0px", boxShadow: "1px 1px 5px 2px" }} className='w-full h-20 mt-4 flex items-center justify-between text-white'>
                        <p className='md:text-xl ml-14 font-bold text-center text-white'>Set your 4 digit password </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountSystem;