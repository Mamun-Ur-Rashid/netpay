// import nid from '../../../assets/nid.jpg'
// import photo from '../../../assets/photo.jpg'
// import password from '../../../assets/pincode.png'
import Title from '../../../shared/title/Title';


const AccountSystem = () => {
    // img 
    const nidImg = 'https://t3.ftcdn.net/jpg/04/39/02/84/360_F_439028436_fuB6JmwKELdcb0OAY6yPW7PwDVtCaWe5.jpg'

    const uploadImg = 'https://media.istockphoto.com/id/1303840298/vector/photo-upload-icon-picture-flat-icons-uploading-your-photo-logo-camera-sign-vector-eps-10-ui.jpg?s=612x612&w=0&k=20&c=vvG8i2sRmEUFbcCcPzfO4wVbXCk3Fi53kCmMY_1n3WE='

    const passImg = 'https://cdn5.vectorstock.com/i/1000x1000/33/24/pc-password-protection-icon-cartoon-style-vector-37443324.jpg'

    return (
        <div className='container mx-auto pb-10 md:pb-14 mt-10 md:mt-14'>
            <Title title={'Create Netpay Account'} subTitle={'Easy 3 steps to create your Netpay account'}></Title>
            <div className=" mt-2 md:flex justify-between lg:gap-x-8 ">

                <div className='bg-[#1B2654] p-8 md:w-1/3 sm:mt-5 px-4'>
                    <div className=''>
                        <img className='mx-auto w-[200px] h-[164px]' src={nidImg} alt="" />
                    </div>
                    <div style={{ borderRadius: "80px 0px 80px 0px", boxShadow: "1px 1px 5px 2px" }} className='w-full h-20 mt-4 flex items-center justify-between text-white'>
                        <p className='lg:text-xl ml-8 md:ml-2 lg:ml-8  font-bold text-center text-white'>Give your national id number </p>
                    </div>
                </div>

                <div className='bg-[#1B2654] p-8 md:w-1/3 sm:mt-5 px-4'>
                    <div className=''>
                        <img className='mx-auto w-[200px] h-[164px]' src={uploadImg} alt="" />
                    </div>
                    <div style={{ borderRadius: "80px 0px 80px 0px", boxShadow: "1px 1px 5px 2px" }} className='w-full h-20 mt-4 flex items-center justify-between text-white'>
                        <p className='lg:text-xl ml-16 md:ml-2 lg:ml-16 font-bold text-center text-white'>Upload your photo </p>
                    </div>
                </div>
                <div className='bg-[#1B2654] p-8 md:w-1/3 sm:mt-5 px-4'>
                    <div className=''>
                        <img className='mx-auto w-[200px] h-[164px]' src={passImg} alt="" />
                    </div>
                    <div style={{ borderRadius: "80px 0px 80px 0px", boxShadow: "1px 1px 5px 2px" }} className='w-full h-20 mt-4 flex items-center justify-between text-white'>
                        <p className='lg:text-xl ml-14 md:ml-2 lg:ml-14 font-bold text-center text-white'>Set your 4 digit password </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountSystem;