import { useContext, } from "react";
import img from "../../../assets/dashboard.jpg"
import { AuthContext } from "../../AuthProvider/AuthProvider";


const DashboardInfo = () => {

    const { user, userInfor } = useContext(AuthContext)


    return (
        <div className=''>
           
            {/* <div className='py-14 pl-10 md:px-28 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 '>
                <div className='bg-[#1B2654] h-40 md:h-52 w-96 md:w-64'>
                    <div>
                        <div className=" text-center mt-4 md:mt-8">
                            <div>
                                <div className="avatar">
                                    <div className="w-24 rounded-full ">
                                        <img src={userInfor?.ImgUrl} />
                                    </div>
                                </div>
                            </div>
                            <div className=' mt-2'>
                                <h1 className='text-white text-2xl'>{userInfor?.name}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#1B2654] h-40 md:h-52 w-96 md:w-64'>
                    <div>
                        <div className=" text-center mt-4 md:mt-8">
                            <div>
                                <div className="avatar">
                                    <div className="w-24 rounded-full ">
                                        <img src={img} />
                                    </div>
                                </div>
                            </div>
                            <div className=' md:mt-2'>
                                <h1 className='text-white text-2xl'>Balance : {userInfor?.balance} tk</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#1B2654] h-40 md:h-52 w-96 md:w-64'>
                    <div>
                        <div className=" text-center mt-4 md:mt-8">
                            <div>
                                <div className="avatar">
                                    <div className="w-24 rounded-full ">
                                        <img src={img} />
                                    </div>
                                </div>
                            </div>
                            <div className=' mt-2'>
                                <h1 className='text-white text-2xl'>Bank Account</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#1B2654] h-40 md:h-52 w-96 md:w-64'>
                    <div>
                        <div className=" text-center mt-4 md:mt-8">
                            <div>
                                <div className="avatar">
                                    <div className="w-24 rounded-full ">
                                        <img src={img} />
                                    </div>
                                </div>
                            </div>
                            <div className=' mt-2'>
                                <h1 className='text-white text-2xl'>Card Number</h1>
                            </div>
                        </div>
                    </div>
                </div>


            </div> */}
        </div>
    );
};

export default DashboardInfo;