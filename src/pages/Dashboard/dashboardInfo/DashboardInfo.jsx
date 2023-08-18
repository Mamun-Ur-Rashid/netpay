import img from "../../../assets/dashboard.jpg"

const DashboardInfo = () => {
    return (
        <div className=' bg-white'>
            <div className='py-20 pl-10 md:px-32 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 '>
                <div className='bg-blue-200 h-40 md:h-52 w-96 md:w-64'>
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
                                <h1 className='text-black text-2xl'>Md kamal</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-blue-200 h-40 md:h-52 w-96 md:w-64'>
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
                                <h1 className='text-black text-2xl'>Balance : 00</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-blue-200 h-40 md:h-52 w-96 md:w-64'>
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
                                <h1 className='text-black text-2xl'>Bank Account</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-blue-200 h-40 md:h-52 w-96 md:w-64'>
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
                                <h1 className='text-black text-2xl'>Card Number</h1>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default DashboardInfo;