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