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
import About from "../../pages/aboutUs/About";
import Business from "../../pages/business/Business"
import Help from "../../pages/help/help/Help";
import Blog from "../../pages/blog/blog/Blog";
import AdminHome from "../../pages/Dashboard/adminDashboard/adminHome/AdminHome";
import PaymentHistory from "../../pages/Dashboard/adminDashboard/paymentHistory/PaymentHistory";
import AllUsers from "../../pages/Dashboard/adminDashboard/allUsers/AllUsers";
import AdminSendMoney from "../../pages/Dashboard/adminDashboard/sendMoney/AdminSendMoney";
import AgentHome from "../../pages/Dashboard/agentDashboard/agentHome/AgentHome";

import TransactionHistory from "../../pages/Dashboard/agentDashboard/transactionHistory/TransactionHistory";
import AgentToAdmin from "../../pages/Dashboard/agentDashboard/agentSendMoney/agentToAdmin/AgentToAdmin";
import AgentToUser from "../../pages/Dashboard/agentDashboard/agentSendMoney/agentToUser/AgentToUser";
import AgentAddMoney from "../../pages/Dashboard/agentDashboard/addMoney/AgentAddMoney";
import UserHome from "../../pages/Dashboard/UserDashboard/userHome/UserHome";
import DashLayout from "../../pages/Dashboard/DashboardLayout/DashLayout";
import UserCashOut from "../../pages/Dashboard/UserDashboard/cashOut/UserCashOut";
import AdminAddMoney from "../../pages/Dashboard/adminDashboard/addMoney/AdminAddMoney";
import Setting from "../../pages/Dashboard/UserDashboard/setting/Setting";
import UserSendMoney from "../../pages/Dashboard/UserDashboard/SendMoney/UserSendMoney";

import Contact from "../../pages/contact/Contact";


import UserMobileRecharge from "../../pages/Dashboard/UserDashboard/mobileRecharge/UserMobileRecharge";
import RequestPayment from "../../pages/Dashboard/UserDashboard/requestPayment/RequestPayment"
import AllTransaction from "../../pages/Dashboard/UserDashboard/allTransaction/AllTransaction";
import BillPayment from "../../pages/Dashboard/UserDashboard/billPayment/BillPayment";
import ElectricityBill from "../../pages/Dashboard/UserDashboard/billPayment/electricityBill/ElectricityBill";
import GasBill from "../../pages/Dashboard/UserDashboard/billPayment/gasBill/GasBill";
import NetworkBill from "../../pages/Dashboard/UserDashboard/billPayment/networkBill/NetworkBill";

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
                path: '/contact',
                element: <Contact></Contact>
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
                path: 'dashboard/userHome',
                element: <UserHome></UserHome>
            },
            {
                path: 'dashboard/cashOut',
                element: <UserCashOut></UserCashOut>
            },
            {
                path: 'dashboard/send-money',
                element: <UserSendMoney></UserSendMoney>
            },
            {
                path: 'dashboard/setting',
                element: <Setting></Setting>
            },
            {
                path:'dashboard/mobileRecharge',
                element: <UserMobileRecharge></UserMobileRecharge>
            },
            {
                path:'dashboard/billPayment',
                element:<BillPayment></BillPayment>
            },
            {
                path:'/dashboard/billPayment/electricityBill',
                element:<ElectricityBill></ElectricityBill>
            },
            {
                path:'/dashboard/billPayment/gasBill',
                element:<GasBill></GasBill>
            },
            {
                path:'/dashboard/billPayment/networkBill',
                element:<NetworkBill></NetworkBill>
            },
            {
                path:'dashboard/requestpayment',
                element:<RequestPayment></RequestPayment>
            },
            {
                path:'dashboard/userTransaction',
                element: <AllTransaction></AllTransaction>
            },

            // admin dashboard route here.....
            {
                path: 'dashboard/adminHome',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'dashboard/paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'dashboard/allUsers',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'dashboard/adminSendMoney',
                element: <AdminSendMoney></AdminSendMoney>
            },
            {
                path: 'dashboard/adminAddMoney',
                element: <AdminAddMoney></AdminAddMoney>
            },

            // agent dashboard route here.........
            {
                path: 'dashboard/agentHome',
                element: <AgentHome></AgentHome>
            },
            {
                path: 'dashboard/agentAddMoney',
                element: <AgentAddMoney></AgentAddMoney>
            },

            {
                path: 'dashboard/agentToAdmin',
                element: <AgentToAdmin></AgentToAdmin>
            },
            {
                path: 'dashboard/agentToUser',
                element: <AgentToUser></AgentToUser>
            },
            {
                path: 'dashboard/agentTransaction',
                element: <TransactionHistory></TransactionHistory>
            }
        ]

    },

])
export default router;