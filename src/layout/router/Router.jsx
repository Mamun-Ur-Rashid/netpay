import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Home from "../../pages/Home/home/Home";
import Service from "../../pages/services/service/Service";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Signup/Signup";
import SendMoney from "../../pages/services/sendMoney/sendMoney/SendMoney";
import CashOut from "../../pages/services/cashOut/cashOut/CashOut";
import AddMoney from "../../pages/services/addMoney/addMoney/AddMoney";
import Payment from "../../pages/services/payment/payment/Payment";
import MobileRecharge from "../../pages/services/mobileRecharge/mobileRecharge/MobileRecharge";
import About from "../../pages/aboutUs/about/About";
import Business from "../../pages/business/business/Business"
import Help from "../../pages/help/help/Help";
import Blog from "../../pages/blog/blog/Blog";

import DashCashOut from "../../pages/Dashboard/UserDashboard/dash-CashOut/DashCashOut";
import DashHome from "../../pages/Dashboard/UserDashboard/dashHome/DashHome";
import DashSendMoney from "../../pages/Dashboard/UserDashboard/dashSendMoney/DashSendMoney"
import DashLayout from "../../pages/Dashboard/dashboardLayout/DashLayout";
import AdminHome from "../../pages/Dashboard/adminDashboard/adminHome/AdminHome";
import PaymentHistory from "../../pages/Dashboard/adminDashboard/paymentHistory/PaymentHistory";
import AllUsers from "../../pages/Dashboard/adminDashboard/allUsers/AllUsers";
import AdminSendMoney from "../../pages/Dashboard/adminDashboard/sendMoney/AdminSendMoney";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Service></Service>,
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/business',
                element: <Business></Business>
            },
            {
                path: '/help',
                element: <Help></Help>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/services/send-money',
                element: <SendMoney></SendMoney>
            },
            {
                path: '/services/cash-out',
                element: <CashOut></CashOut>
            },
            {
                path: '/services/add-money',
                element: <AddMoney></AddMoney>
            },
            {
                path: '/services/payment',
                element: <Payment></Payment>
            },
            {
                path: '/services/mobile-recharge',
                element: <MobileRecharge></MobileRecharge>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <DashLayout></DashLayout>,
        children: [

            //user dashboard route here .......
            {
                path: 'dashboard/home',
                element: <DashHome></DashHome>
            },
            {
                path: 'dashboard/send-money',
                element: <DashSendMoney></DashSendMoney>
            },
            {
                path: 'dashboard/cashout',
                element: <DashCashOut></DashCashOut>
            },

            // admin dashboard route here.....
            {
                path:'dashboard/adminHome',
                element:<AdminHome></AdminHome>
            },
            {
                path:'dashboard/paymentHistory',
                element:<PaymentHistory></PaymentHistory>
            },
            {
                path:'dashboard/allUsers',
                element:<AllUsers></AllUsers>
            },
            {
                path:'dashboard/adminSendMoney',
                element:<AdminSendMoney></AdminSendMoney>
            },

            // aggent dashboard route here.........
            {

            },
        ]

    }
])
export default router;