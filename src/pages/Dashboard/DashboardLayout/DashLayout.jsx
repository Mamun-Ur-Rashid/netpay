

// import CommonBanner from '../../../shared/commonBanner/CommonBanner';
// import img from "../../../assets/dashboard.jpg"
import DashboardInfo from '../dashboardInfo/DashboardInfo';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../../../Hook/useAdmin';
import useAgent from '../../../Hook/useAgent';
import { FaHistory, FaHome, FaHourglassHalf, FaSearch } from "react-icons/fa";
import { FaChartColumn, FaUserGroup } from "react-icons/fa6";
import logo from '../../../assets/logo5.png'

const DashLayout = () => {
    const [isAdmin] = useAdmin();
    const [isAgent] = useAgent();

    return (
        <div className=' mx-auto'>
            {/* <CommonBanner BannerImage={img}></CommonBanner> */}
            <DashboardInfo />

            <div className='bg-[#070b29]'>
                <div className='pb-20 pr-10 pl-10 md:px-32 md:flex'>
                    <div className=' md:w-1/4 bg-[#1D2939] sticky top-0 h-screen'>
                        <ul className='text-white' >
                            {isAdmin ? (
                                <>
                                    <NavLink to='/' className="text-white hover:text-orange-400 text-3xl">
                                        <div style={{ width: 'full', height: '79px' }}>
                                            <img className='w-full h-full mb-6' src={logo} alt="" />
                                        </div>
                                    </NavLink>
                                    <li className='h-14  text-2xl pt-2 '><NavLink to='dashboard/adminHome'> <FaChartColumn className='mx-2 inline-flex mb-[2px]'></FaChartColumn> Admin Dashboard</NavLink></li>
                                    <li className='h-14  text-2xl pt-2'><NavLink to='dashboard/paymentHistory'><FaHistory className='inline-flex mb-[2px] mx-2'></FaHistory> Payment History</NavLink></li>
                                    <li className='h-14  text-2xl pt-2'><NavLink to='dashboard/allUsers'><FaUserGroup className='inline-flex mb-[2px] mx-2'></FaUserGroup> All Users</NavLink></li>
                                    <li className='h-14  text-2xl pt-2 '><NavLink to='dashboard/adminSendMoney'> <FaHourglassHalf className='inline-flex mb-[2px] mx-2'></FaHourglassHalf>Send Money</NavLink></li>

                                    <li className='h-14  text-2xl pt-2 '><NavLink to='/'> <FaHome className='inline-flex mb-[2px] mx-2'></FaHome>Home</NavLink></li></>
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
                    <div className=' md:w-3/4 bg-slate-200 mt-10 md:mt-0'>
                        <div className='w-full h-20 bg-white border-b-[1px] shadow-sm shadow-[#1D2939] sticky top-0 border-b-[#1D2939]'>
                            <div>
                                <div className='relative'>
                                    <input type="text" className='border-2 px-6 py-2 ml-4 w-2/5 mt-4' placeholder='Search' />
                                    <button className='text-slate-400 absolute top-7 left-[37%]'><FaSearch></FaSearch></button>
                                </div>
                                <div></div>
                            </div>
                        </div>
                        <Outlet></Outlet>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DashLayout;