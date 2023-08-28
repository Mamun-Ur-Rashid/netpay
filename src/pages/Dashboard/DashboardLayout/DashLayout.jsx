

import CommonBanner from '../../../shared/commonBanner/CommonBanner';
import img from "../../../assets/dashboard.jpg"
import DashboardInfo from '../dashboardInfo/DashboardInfo';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../../../Hook/useAdmin';
import useAgent from '../../../Hook/useAgent';
import { FaHistory, FaHome, FaHourglassHalf } from "react-icons/fa";
import { FaChartColumn, FaUserGroup } from "react-icons/fa6";

const DashLayout = () => {
    const [isAdmin] = useAdmin();
    const [isAgent] = useAgent();

    return (
        <div className=' mx-auto'>
            {/* <CommonBanner BannerImage={img}></CommonBanner> */}
            <DashboardInfo />
            <div className='bg-[#070b29]'>
                <div className='pb-20 pr-10 pl-10 md:px-32 md:flex gap-10'>
                    <div className=' md:w-1/4 bg-[#1c2e7ae3]'>
                        <ul className='text-white' >
                            {isAdmin?(
                                <> 
                                <li className='h-14 ml-4 text-2xl pt-2 '><NavLink to='dashboard/adminHome'> <FaChartColumn className='mx-2 inline-flex mb-[2px]'></FaChartColumn> Admin Dashboard</NavLink></li>
                                <li className='h-14 ml-4 text-2xl pt-2'><NavLink to='dashboard/paymentHistory'><FaHistory className='inline-flex mb-[2px] mx-2'></FaHistory> Payment History</NavLink></li>
                                <li className='h-14 ml-4 text-2xl pt-2'><NavLink to='dashboard/allUsers'><FaUserGroup className='inline-flex mb-[2px] mx-2'></FaUserGroup> All Users</NavLink></li>
                                <li className='h-14 ml-4 text-2xl pt-2 '><NavLink to='dashboard/adminSendMoney'> <FaHourglassHalf className='inline-flex mb-[2px] mx-2'></FaHourglassHalf>Send Money</NavLink></li>
        
                                <li className='h-14 ml-4 text-2xl pt-2 '><NavLink to='/'> <FaHome className='inline-flex mb-[2px] mx-2'></FaHome>Home</NavLink></li></>
                            ) 
                            : isAgent ? (
                                <> <li className='h-14 text-center text-2xl pt-2 '><NavLink to='dashboard/home'>AGENT DASHBOAED</NavLink></li>
                                <li className='h-14 text-center text-2xl pt-2 bg-[#1ba8c6]'><NavLink to='dashboard/send-money'>SEND MONEY</NavLink></li>
                                <li className='h-14 text-center text-2xl pt-2 '><NavLink to='dashboard/cashout'>CASH OUT</NavLink></li>
                                <li className='h-14 text-center text-2xl pt-2 '><NavLink to='dashboard/cashout'>Deposite Money</NavLink></li>
                                <li className='h-14 text-center text-2xl pt-2 '><NavLink to='dashboard/cashout'>Bank account</NavLink></li>
                                <li className='h-14 text-center text-2xl pt-2 '><NavLink to='dashboard/cashout'>Card Number</NavLink></li>
                                <li className='h-14 text-center text-2xl pt-2 '><NavLink to='dashboard/cashout'>Seeting</NavLink></li>
                                <li className='h-14 text-center text-2xl pt-2 '><NavLink to='/'>Home</NavLink></li></>
                            ) 
                            : (
                                <> <li className='h-14 text-center text-2xl pt-2 '><NavLink to='dashboard/home'>USER DASHBOAED</NavLink></li>
                                <li className='h-14 text-center text-2xl pt-2 bg-[#1ba8c6]'><NavLink to='dashboard/send-money'>SEND MONEY</NavLink></li>
                                <li className='h-14 text-center text-2xl pt-2 '><NavLink to='dashboard/cashout'>CASH OUT</NavLink></li>
                                <li className='h-14 text-center text-2xl pt-2 '><NavLink to='dashboard/cashout'>Deposite Money</NavLink></li>
                                <li className='h-14 text-center text-2xl pt-2 '><NavLink to='dashboard/cashout'>Bank account</NavLink></li>
                                <li className='h-14 text-center text-2xl pt-2 '><NavLink to='dashboard/cashout'>Card Number</NavLink></li>
                                <li className='h-14 text-center text-2xl pt-2 '><NavLink to='dashboard/cashout'>Seeting</NavLink></li>
                                <li className='h-14 text-center text-2xl pt-2 '><NavLink to='/'>Home</NavLink></li></>
                            )

                            }
                            
                        </ul>
                    </div>
                    <div className=' md:w-3/4 bg-[#4180aa] mt-10 md:mt-0'>
                        <Outlet></Outlet>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DashLayout;