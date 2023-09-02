import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../../../Hook/useAdmin';
import useAgent from '../../../Hook/useAgent';
import { FaHistory, FaHome, FaHourglassHalf, FaSearch } from "react-icons/fa";
import { FaChartColumn, FaUserGroup } from "react-icons/fa6";
import logo from '../../../assets/logo5.png'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAxiosSecure from '../../../Hook/useAxiosSecure';


const DashLayout = () => {

    const [isAdmin] = useAdmin();
    const [isAgent] = useAgent();
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const [userInfor, setUserInfor] = useState();

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

            <div className='bg-[#070b29]'>
                <div className='pb-20 md:flex w-full'>

                    {/* Side bar */}
                    <div className=' md:w-[280px] bg-[#1D2939] sticky top-0 md:h-screen'>
                        <ul className='text-white' >
                            {isAdmin ? (
                                <>
                                    <NavLink to='/' className="text-white hover:text-orange-400 text-3xl">
                                        <div style={{ width: 'full', height: '79px' }}>
                                            <img className=' w-full h-full mb-6' src={logo} alt="" />
                                        </div>
                                    </NavLink>
                                    <li className='h-10  text-lg ml-6 pt-2 mt-10 '><NavLink to='dashboard/adminHome'> <FaChartColumn className='mx-2 inline-flex mb-[2px]'></FaChartColumn> Admin Dashboard</NavLink></li>
                                    <li className='h-10  text-lg ml-6 pt-2'><NavLink to='dashboard/paymentHistory'><FaHistory className='inline-flex mb-[2px] mx-2'></FaHistory> Payment History</NavLink></li>
                                    <li className='h-10  text-lg ml-6 pt-2'><NavLink to='dashboard/allUsers'><FaUserGroup className='inline-flex mb-[2px] mx-2'></FaUserGroup> All Users</NavLink></li>
                                    <li className='h-10  text-lg ml-6 pt-2 '><NavLink to='dashboard/adminSendMoney'> <FaHourglassHalf className='inline-flex mb-[2px] mx-2'></FaHourglassHalf>Send Money</NavLink></li>

                                    <li className='h-10  text-lg ml-6 pt-2 '><NavLink to='/'> <FaHome className='inline-flex mb-[2px] mx-2'></FaHome>Home</NavLink></li></>
                            )
                                : isAgent ? (
                                    <>
                                        <NavLink to='/' className="text-white hover:text-orange-400 text-3xl">
                                            <div style={{ width: 'full', height: '79px' }}>
                                                <img className=' w-full h-full mb-6' src={logo} alt="" />
                                            </div>
                                        </NavLink>
                                        <li className='h-10  text-lg ml-6 pt-2 mt-10  '><NavLink to='dashboard/agentHome'>Agent Dashboard</NavLink></li>
                                        <li className='h-10  text-lg ml-6 pt-2'><NavLink to='dashboard/addMoney'>Add Money</NavLink></li>
                                        <li className='h-10  text-lg ml-6 pt-2  '><NavLink to='dashboard/sendMoney'>Send Money</NavLink></li>
                                        <li className='h-10  text-lg ml-6 pt-2   '><NavLink to='dashboard/cashout'>Deposite Money</NavLink></li>
                                        <li className='h-10  text-lg ml-6 pt-2   '><NavLink to='dashboard/cashout'>Bank account</NavLink></li>
                                        <li className='h-10  text-lg ml-6 pt-2  '><NavLink to='dashboard/cashout'>Card Number</NavLink></li>
                                        <li className='h-10  text-lg ml-6 pt-2 mt  '><NavLink to='dashboard/cashout'>Setting</NavLink></li>
                                        <li className='h-10  text-lg ml-6 pt-2'><NavLink to='/'>Home</NavLink></li></>
                                )
                                    : (
                                        <>
                                            <NavLink to='/' className="text-white hover:text-orange-400 text-3xl">
                                                <div style={{ width: 'full', height: '79px' }}>
                                                    <img className=' w-full h-full mb-6' src={logo} alt="" />
                                                </div>
                                            </NavLink>
                                            <li className='h-10  text-lg ml-6 pt-2 mt-10 '><NavLink to='dashboard/home'>User Dashboard</NavLink></li>
                                            <li className='h-10  text-lg ml-6 pt-2'><NavLink to='dashboard/send-money'>Send Money</NavLink></li>
                                            <li className='h-10  text-lg ml-6 pt-2 '><NavLink to='dashboard/cashout'>Cash Out</NavLink></li>
                                            <li className='h-10  text-lg ml-6 pt-2 '><NavLink to='dashboard/cashout'>Deposite Money</NavLink></li>
                                            <li className='h-10  text-lg ml-6 pt-2 '><NavLink to='dashboard/cashout'>Bank account</NavLink></li>
                                            <li className='h-10  text-lg ml-6 pt-2'><NavLink to='dashboard/cashout'>Card Number</NavLink></li>
                                            <li className='h-10  text-lg ml-6 pt-2 '><NavLink to='dashboard/cashout'>Setting</NavLink></li>
                                            <li className='h-10  text-lg ml-6 pt-2'><NavLink to='/'>Home</NavLink></li></>
                                    )

                            }

                        </ul>
                    </div>

                    {/* Main contenet */}
                    <div className=' w-full bg-slate-200 mt-10 md:mt-0'>
                        <div className='w-full h-20 bg-white border-b-[1px] shadow-sm shadow-[#1D2939] sticky top-0 border-b-[#1D2939]'>
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
                        </div>
                        <Outlet></Outlet>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default DashLayout;