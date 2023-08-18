

import CommonBanner from '../../../shared/commonBanner/CommonBanner';
import img from "../../../assets/dashboard.jpg"
import DashboardInfo from '../dashboardInfo/DashboardInfo';
import { NavLink, Outlet } from 'react-router-dom';

const DashLayout = () => {

    return (
        <div className=' mx-auto'>
            <CommonBanner BannerImage={img}></CommonBanner>
            <DashboardInfo />
            <div className='bg-[#070b29]'>
                <div className='pb-20 pr-10 pl-10 md:px-32 md:flex gap-10'>
                    <div className=' md:w-1/4 bg-[#1B2654]'>
                        <ul className='text-white' >

                            <li className='h-14 text-center text-2xl pt-2 '><NavLink to='dashboard/home'>DASHBOAED</NavLink></li>
                            <li className='h-14 text-center text-2xl pt-2 bg-[#1ba8c6]'><NavLink to='dashboard/send-money'>SEND MONEY</NavLink></li>
                            <li className='h-14 text-center text-2xl pt-2 '><NavLink to='dashboard/cashout'>CASH OUT</NavLink></li>
                            <li className='h-14 text-center text-2xl pt-2 '><NavLink to='dashboard/cashout'>Deposite Money</NavLink></li>
                            <li className='h-14 text-center text-2xl pt-2 '><NavLink to='dashboard/cashout'>Bank account</NavLink></li>
                            <li className='h-14 text-center text-2xl pt-2 '><NavLink to='dashboard/cashout'>Card Number</NavLink></li>
                            <li className='h-14 text-center text-2xl pt-2 '><NavLink to='dashboard/cashout'>Seeting</NavLink></li>
                            <li className='h-14 text-center text-2xl pt-2 '><NavLink to='/'>Home</NavLink></li>
                        </ul>
                    </div>
                    <div className=' md:w-3/4 bg-[#1B2654] mt-10 md:mt-0'>
                        <Outlet></Outlet>
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