import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../../../Hook/useAdmin';
import useAgent from '../../../Hook/useAgent';
import { FaHistory, FaHome, FaHourglassHalf, FaMoneyBillWave, FaSearch, FaWhmcs } from "react-icons/fa";
import { FaChartColumn, FaUserGroup } from "react-icons/fa6";
import {MdSendToMobile,MdOutlineRequestQuote} from "react-icons/md"
import {IoCashOutline} from 'react-icons/io5'

import logo from '../../../assets/update.png'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import './DashLayout.css'


const DashLayout = () => {

    const [isAdmin] = useAdmin();
    const [isAgent] = useAgent();
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const [userInfor, setUserInfor] = useState();
    const [sendMoneyDropdown, setSendMoneyDropdown] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosSecure.get(`/allUsers/${user?.email}`);
                setUserInfor(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData(); 
    }, [user]);

    return (
        <div className=' mx-auto'>
            {/* <CommonBanner BannerImage={img}></CommonBanner> */}
            {/* <DashboardInfo /> */}

            <div className=''>
                <div className='pb-20 md:flex w-full'>

                    {/* Side bar */}
                    <div className=' md:w-[300px]  sticky top-0 md:h-screen'>
                        <ul className='grid text-base font-semibold px-5' id='dashboard'>

                            {isAdmin ? (
                                <>
                                    <NavLink to='/' className=" hover:text-orange-400 text-3xl">
                                        <div style={{ width: 'full', height: '79px' }}>
                                            <img className='w-32 h-24 bg-white rounded-2xl m-[25px]' src={logo} alt="" />
                                        </div>
                                    </NavLink>
                                    <NavLink to='dashboard/adminHome' className='flex items-center mt-12'> <FaChartColumn className=' m-3'/> Admin Dashboard</NavLink>
                                    <NavLink to='dashboard/adminAddMoney' className='flex items-center'> <FaMoneyBillWave className=' m-3'/> Add Money</NavLink>
                                    <NavLink to='dashboard/send-money' className='flex items-center'> <MdSendToMobile size={20} className='ml-[8px] m-3'/> Send Money</NavLink>
                                    <NavLink to='dashboard/paymentHistory' className='flex items-center'> <FaHistory className='m-3'/>Transactions</NavLink>
                                    <NavLink to='dashboard/allUsers' className='flex items-center'> <FaUserGroup className=' m-3'/> All Users</NavLink>
                                    <NavLink to='dashboard/cashout' className='flex items-center'> <FaWhmcs className='m-3'/>Setting</NavLink>
                                    <NavLink to='/' className='flex items-center m-3'> <FaHome className='mr-2'/> Home</NavLink> 
                                </>
                                ):isAgent?(
                                <>
                                    <NavLink to='/' className=" hover:text-orange-400 text-3xl">
                                        <div style={{ width: 'full', height: '79px' }}>
                                            <img className='w-32 h-24 bg-white rounded-2xl m-[25px]' src={logo} alt="" />
                                        </div>
                                    </NavLink>
                                    <NavLink to='dashboard/agentHome' className='flex items-center mt-12'> <FaChartColumn className=' m-3'/> Agent Dashboard</NavLink>
                                    <NavLink to='dashboard/agentAddMoney' className='flex items-center'> <FaMoneyBillWave className=' m-3'/> Add Money</NavLink>
                                    <NavLink to='dashboard/send-money' className='flex items-center'> <MdSendToMobile size={20} className='ml-[8px] m-3'/> Send Money</NavLink>
                                    <NavLink to='dashboard/agentTransaction' className='flex items-center'> <FaHistory className='m-3'/>Transactions</NavLink>
                                    <NavLink to='dashboard/cashout' className='flex items-center'> <FaWhmcs className='m-3'/>Setting</NavLink>
                                    <NavLink to='/' className='flex items-center m-3'> <FaHome className='mr-2'/> Home</NavLink>
                                    {/* <li className='h-10  text-lg ml-6 pt-2 '>
                                            <button
                                                onClick={() => setSendMoneyDropdown(!sendMoneyDropdown)}
                                                className=" hover:text-[#df390be6] flex items-center text-lg"
                                            >
                                                <FaHourglassHalf className='inline-flex mb-[2px] mx-2'></FaHourglassHalf> Send Money
                                            </button>
                                        
                                            {sendMoneyDropdown && (
                                                <ul className="menu menu-sm dropdown-content mt-3  mr-4 z-[1] shadow bg-base-100 rounded-box  bg-[hsla(11,66%,51%,1)] p-2 text-black">
                                                    <li><NavLink to='dashboard/agentToAgent'>Agent to Agent</NavLink></li>
                                                    <li><NavLink to='dashboard/agentToAdmin'>Agent to Admin</NavLink></li>
                                                    <li><NavLink to='dashboard/agentToUser'>Agent to User</NavLink></li>
                                                </ul>
                                            )}
                                        </li> 
                                    */}
                                </>
                                ): (
                                <>                                    
                                    <NavLink to='/' className=" hover:text-orange-400 text-3xl">
                                        <div style={{ width: 'full', height: '79px' }}>
                                            <img className='w-32 h-24 bg-white rounded-2xl m-[25px]' src={logo} alt="" />
                                        </div>
                                    </NavLink>
                                    <NavLink to='dashboard/home' className='flex items-center mt-12'> <FaChartColumn className=' m-3'/> User Dashboard</NavLink>
                                    <NavLink to='dashboard/send-money' className='flex items-center'> <MdSendToMobile size={20} className='ml-[8px] m-3'/> Send Money</NavLink>
                                    {/* <NavLink to='dashboard/cashout' className='flex items-center'> <MdOutlineRequestQuote size={20} className='ml-[8px] m-3'/> Request Payment</NavLink> */}
                                    <NavLink to='dashboard/cashout' className='flex items-center'> <IoCashOutline size={20} className='ml-[8px] m-3'/>Cash Out</NavLink>
                                    {/* <NavLink to='dashboard/cashout' className='flex items-center'> <FaHistory size={20} className='ml-[8px] m-3'/>Transactions</NavLink> */}
                                    {/* <NavLink to='/' className='flex items-center'> <FaHourglassHalf className='m-3'/>Deposit Money</NavLink> */}
                                    {/* <NavLink to='/' className='flex items-center'> <FaHourglassHalf className='m-3'/>Bank Account</NavLink>
                                    <NavLink to='/' className='flex items-center'> <FaHourglassHalf className='m-3'/>Card Number</NavLink>
                                    <NavLink to='/' className='flex items-center'> <FaHourglassHalf className='m-3'/>Setting</NavLink> */}
                                    <NavLink to='/' className='flex items-center'> <FaHome size={20} className='ml-[8px] m-3'/> Home</NavLink>
                                </>
                                )
                            }
                        </ul>
                    </div>



                    {/* Main content */}

                    <div className=' w-full bg-slate-200 mt-10 md:mt-0'>

                        {/* <div className='w-full h-20 bg-white border-b-[1px] shadow-sm shadow-[#1D2939] sticky top-0 border-b-[#1D2939]'>
                            <div className='flex justify-between'>
                                <div className='relative'>
                                    <input type="text" className='border-2 px-6 py-2 ml-4 w-full mt-4' placeholder='Search' />
                                    <button className='text-slate-400 absolute top-7 left-[95%]'><FaSearch></FaSearch></button>
                                </div>
                                <div className='flex '>
                                    <img className='w-12 h-12 rounded-full mt-[7px]' src={userInfor?.ImgUrl} alt="" />
                                    <div className='mt-2'>
                                        <p className='ml-3 pr-2 font-semibold'>{userInfor?.email}</p>
                                        <p className='ml-3 mt-1 '><span className='bg-cyan-800 flex items-center justify-center w-1/2 text-white'>{userInfor?.role}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                       

                        <div className='flex justify-end p-2 pb-10'>
                            <img className='w-12 h-12 rounded-full mt-[7px]' src={userInfor?.ImgUrl} alt="" />
                            <div className='mt-2'>
                                <p className='ml-3 pr-2 font-semibold'>{userInfor?.email}</p>
                                <p className='ml-3 mt-1 '><span className='bg-cyan-800 flex items-center justify-center w-1/2 text-white'>{userInfor?.role}</span></p>
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