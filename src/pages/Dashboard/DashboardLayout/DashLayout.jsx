// import { useContext } from 'react';
// import { NavLink, Outlet } from 'react-router-dom';
// import { AuthContext } from '../../AuthProvider/AuthProvider';
import CommonBanner from '../../../shared/commonBanner/CommonBanner';
import img from "../../../assets/dashboard.jpg"

const DashLayout = () => {
    // const { user } = useContext(AuthContext)
    return (
        <div className=' mx-auto'>
            <CommonBanner BannerImage={img}></CommonBanner>
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
                                    <h1 className='text-black'>Name</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-blue-200 h-40 md:h-52 w-96 md:w-64'>
                        a div
                    </div>
                    <div className='bg-blue-200 h-40 md:h-52 w-96 md:w-64'>
                        a div
                    </div>
                    <div className='bg-blue-200 h-40 md:h-52 w-96 md:w-64'>
                        a div
                    </div>

                </div>
            </div>

            {/* <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col  bg-white ">
                    <label htmlFor="my-drawer-2" className="btn btn-primary  drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <div className='bg-slate-300 px-20 py-10'>
                        <div className="avatar text-center">
                            <div className="w-20  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                        <h1> Name - {user?.displayName}</h1>
                    </div>
                    <ul className="menu p-4 w-80 h-full bg-slate-300 text-black">
                       
                        <li><NavLink to='dashboard/home'>DASHBOAED</NavLink></li>
                        <li><NavLink to='dashboard/send-money'>SEND MONEY</NavLink></li>
                        <li><NavLink to='dashboard/cashout'>CASH OUT</NavLink></li>
                        
                    </ul>

                </div>
            </div> */}
        </div>
    );
};

export default DashLayout;