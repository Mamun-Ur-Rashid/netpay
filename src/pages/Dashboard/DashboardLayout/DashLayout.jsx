

import CommonBanner from '../../../shared/commonBanner/CommonBanner';
import img from "../../../assets/dashboard.jpg"
import DashboardInfo from '../dashboardInfo/DashboardInfo';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../../../Hook/useAdmin';
import useAgent from '../../../Hook/useAgent';

const DashLayout = () => {
    const [isAdmin] = useAdmin();
    const [isAgent] = useAgent();

    return (
        <div className=' mx-auto'>
            <CommonBanner BannerImage={img}></CommonBanner>
            <DashboardInfo />
            <div className='bg-[#070b29]'>
                <div className='pb-20 pr-10 pl-10 md:px-32 md:flex gap-10'>
                    <div className=' md:w-1/4 bg-[#79809d]'>
                        <ul className='text-white' >
                            {isAdmin?(
                                <> 
                                <li className='h-14 text-center text-2xl pt-2 '><NavLink to='dashboard/home'style={{ backgroundColor: '#45DF4B' }}>ADMIN DASHBOAED</NavLink></li>
                                <li className='h-14 text-center text-2xl pt-2'><NavLink to='dashboard/send-money' activeClassName='bg-[#45DF4B]'>SEND MONEY</NavLink></li>
                                <li className='h-14 text-center text-2xl pt-2 '><NavLink to='dashboard/cashout'style={{ backgroundColor: '#45DF4B' }}>CASH OUT</NavLink></li>
                                <li className='h-14 text-center text-2xl pt-2 '><NavLink to='dashboard/cashout' activeClassName='bg-[#45DF4B]'>Deposite Money</NavLink></li>
                                <li className='h-14 text-center text-2xl pt-2 '><NavLink to='dashboard/cashout'>Bank account</NavLink></li>
                                <li className='h-14 text-center text-2xl pt-2 '><NavLink to='dashboard/cashout'>Card Number</NavLink></li>
                                <li className='h-14 text-center text-2xl pt-2 '><NavLink to='dashboard/cashout'>Seeting</NavLink></li>
                                <li className='h-14 text-center text-2xl pt-2 '><NavLink to='/'>Home</NavLink></li></>
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
                    <div className=' md:w-3/4 bg-[#608096] mt-10 md:mt-0'>
                        <Outlet></Outlet>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DashLayout;