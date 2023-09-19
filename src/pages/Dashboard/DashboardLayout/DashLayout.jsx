import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../../../Hook/useAdmin';
import useAgent from '../../../Hook/useAgent';
import { FaHistory, FaHome, FaHourglassHalf, FaLightbulb, FaMobileAlt, FaMoneyBillWave, FaSearch, FaWhmcs } from "react-icons/fa";
import { FaChartColumn, FaUserGroup } from "react-icons/fa6";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import './DashLayout.css';


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
            <div className=''>
                <div className='pb-20 md:flex w-full'>

                    {/* Side bar */}
                    <div className=' md:w-[280px] md:h-screen'>
                        <ul className='px-5 font-semibold text-lg' id='dashboard' >
                            {isAdmin ? (
                                <>
                                    <NavLink to='/' className="text-white hover:text-orange-400 text-3xl">
                                        <div style={{ width: 'full', height: '79px' }}>
                                            <img className='ml-8 w-[180px]  h-full mb-6' src="https://i.ibb.co/Wy6R5qM/update.png" alt="update" border="0" />
                                        </div>
                                    </NavLink>
                                    <NavLink to='dashboard/adminHome' className='inline-flex items-center mt-16'> <FaChartColumn className='m-3'/> Admin Dashboard</NavLink>
                                    <NavLink to='dashboard/paymentHistory' className='inline-flex items-center'><FaHistory className='m-3'></FaHistory> Transactions History</NavLink>
                                    <NavLink to='dashboard/allUsers' className="flex items-center"><FaUserGroup className='m-3'></FaUserGroup> All Users</NavLink>
                                    <NavLink to='dashboard/adminAddMoney' className="flex item"> <FaMoneyBillWave className='m-3'></FaMoneyBillWave>Add Money</NavLink>
                                    <NavLink to='dashboard/adminSendMoney' className="flex items-center"> <FaHourglassHalf className='m-3'></FaHourglassHalf>Send Money</NavLink>

                                    <NavLink to='/' className="flex items-center"> <FaHome className=' m-3'></FaHome>Home</NavLink></>
                            )
                                : isAgent ? (
                                    <>
                                        <NavLink to='/' className="text-white hover:text-orange-400 text-3xl">
                                            <div style={{ width: 'full', height: '79px' }}>
                                                <img className='ml-8 w-[180px]  h-full mb-6' src="https://i.ibb.co/Wy6R5qM/update.png" alt="update" border="0" />
                                            </div>
                                        </NavLink>
                                        <NavLink to='dashboard/agentHome' className="flex items-center mt-16"> <FaChartColumn className='m-3'></FaChartColumn>Agent Dashboard</NavLink>
                                        <NavLink to='dashboard/agentAddMoney' className="flex items-center"> <FaMoneyBillWave className=' m-3'></FaMoneyBillWave> Add Money</NavLink>
                                        
                                        {/* Step 2: Add a dropdown button */}
                                        <button
                                            onClick={() => setSendMoneyDropdown(!sendMoneyDropdown)}
                                            className=" hover:text-gray-400 flex items-center text-lg"
                                        >
                                            <FaHourglassHalf className='inline-flex mb-[2px] mx-2 m-3'></FaHourglassHalf> Send Money
                                        </button>

                                        {/* Step 3: Create the dropdown menu */}
                                        {sendMoneyDropdown && (
                                            <ul className="menu menu-sm dropdown-content mt-3  mr-4 z-[1] shadow bg-gray-400  rounded-box   p-2 text-black">
                                                <NavLink to='dashboard/agentToAdmin' >Agent to Admin</NavLink>
                                                <NavLink to='dashboard/agentToUser'>Agent to User</NavLink>
                                            </ul>
                                        )}
                                    
                                        <NavLink to='dashboard/agentTransaction' className="flex items-center"> <FaHistory className='m-3'></FaHistory> Transaction History</NavLink>
                                        {/* <NavLink to='dashboard/#' className="flex items-center"> <FaWhmcs className='m-3'></FaWhmcs> Setting</NavLink> */}
                                        <NavLink to='/' className="flex items-center"> <FaHome className='m-3'></FaHome>Home</NavLink></>

                                )
                                    : ( 
                                        <>
                                            <NavLink to='/' className=" text-3xl">
                                                <div style={{ width: 'full', height: '79px' }}>
                                                    <img className='ml-8 w-[180px] h-full mb-6' src="https://i.ibb.co/Wy6R5qM/update.png" alt="update" border="0" />
                                                </div>
                                            </NavLink>
                                            <NavLink to='dashboard/userHome' className="flex items-center mt-16"> <FaChartColumn className='m-3'></FaChartColumn> User Dashboard</NavLink>
                                            <NavLink to='dashboard/cashOut' className="flex items-center"> <FaMoneyBillWave className='m-3'></FaMoneyBillWave> Cash Out</NavLink>
                                            <NavLink to='dashboard/send-money' className="flex items-center"><FaHourglassHalf className='m-3'></FaHourglassHalf> Send Money</NavLink>
                                            <NavLink to='dashboard/mobileRecharge' className="flex items-center"> <FaMobileAlt className='m-3'></FaMobileAlt> Mobile Recharge</NavLink>
                                            <NavLink to='dashboard/billPayment' className="flex items-center"> <FaLightbulb className='m-3'></FaLightbulb> Bill Payment</NavLink>

                                            <NavLink to='dashboard/requestpayment' className="flex items-center"> <FaWhmcs className='m-3'></FaWhmcs> Reqeust Payment</NavLink>
                                  
                                            <NavLink to='dashboard/setting' className="flex items-center"> <FaWhmcs className='m-3'></FaWhmcs> Setting</NavLink>
                                            <NavLink to='/'> <FaHome className='inline-flex mb-[2px] mx-2'></FaHome> Home</NavLink></>
                                    )

                            }

                        </ul>
                    </div>

                    {/* Main content */}
                    <div className=' w-[1100px] bg-gray-200 mt-10 md:mt-0'>
                        <div className='w-full sticky top-0'>
                            <div className='flex shadow-lg bg-gray-300 justify-between items-center'>
                                <div className='relative m-4 p-2 px-3 bg-[#4e63b8] rounded-2xl text-white'>
                                    <div className='text-2xl'>Total Amount : <span className='font-bold text-3xl'>{userInfor?.balance}</span> </div>
                                </div>
                                <div className='flex m-4 gap-2 '>
                                    <img className='w-12 h-12 rounded-full mt-[7px]' src={userInfor?.ImgUrl} alt="" />
                                    <div className=''>
                                        <p className='ml-3 pr-2 font-semibold'>{userInfor?.email}</p>
                                        <p className='ml-3 mt-1 '><span className='bg-[#4e63b8] p-1 rounded flex items-center justify-center w-1/2 text-white'>{userInfor?.role}</span></p>
                                    </div>
                                </div>
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