import nid from '../../../assets/nid.jpg'
import photo from '../../../assets/photo.jpg'
import password from '../../../assets/pincode.png'

const AccountSystem = () => {
    return (
        <div className='container mx-auto pb-20 mt-20'>
            <h1 className="text-center font-bold text-5xl my-5"><span className="border-b-4 border-orange-700 text-orange-700">Create Netpay Account</span></h1>
            <p className='text-center text-xl font-semibold mt-8'>Easy 3 steps to create your Netpay account</p>
            <div className="md:flex justify-between mt-16">
                <div className=' md:w-[30%] sm:mt-5 px-4'>
                    <div className=''>
                        <img className='mx-auto w-[164px] h-[164px]' src={nid} alt="" />
                    </div>
                    <div style={{ borderRadius: "80px 0px 80px 0px", boxShadow: "1px 1px 5px 2px" }} className='w-full h-20 bg-[#FFEAEA] flex items-center justify-between'>
                        <p className='px-5 font-bold text-center'>Give your national id number and some ininformation</p>
                    </div>
                </div>
                <div className='md:w-[30%] sm:mt-5 px-4'>
                    <div className=''>
                        <img className='mx-auto w-[164px] h-[164px]' src={photo} alt="" />
                    </div>
                    <div style={{ borderRadius: "80px 0px 80px 0px", boxShadow: "1px 1px 5px 2px" }} className='w-full h-20 bg-[#FFEAEA] flex items-center justify-between'>
                        <p className='px-5 font-bold text-center'>Upload your photo and  digital signature</p>
                    </div>
                </div>
                <div className='md:w-[30%] sm:mt-5 px-4'>
                    <div className=''>
                        <img className='mx-auto w-[164px] h-[164px]' src={password} alt="" />
                    </div>
                    <div style={{ borderRadius: "80px 0px 80px 0px", boxShadow: "1px 1px 5px 2px" }} className='w-full h-20 bg-[#FFEAEA] flex items-center justify-between'>
                        <p className='px-5 font-bold sm:text-center'>Set your 4 digit password </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountSystem;