import { NavLink, Outlet } from 'react-router-dom';

const DashLayout = () => {
    return (
        <div className=' mx-auto'>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center bg-indigo-200 justify-center">

                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-[#FFEAEA] text-base-content">
                        {/* Sidebar content here */}
                        <li><NavLink to='dashboard/home'>DASHBOAED</NavLink></li>
                        <li><NavLink to=''>SEND MONEY</NavLink></li>
                        <li><NavLink to='dashboard/cashout'>CASH OUT</NavLink></li>
                        <li><NavLink to=''>BILL PAY</NavLink></li>
                        <li><NavLink to=''>MOBILE RECHARGE</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashLayout;