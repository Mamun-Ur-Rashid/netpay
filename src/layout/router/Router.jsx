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
import UserDashboard from "../../pages/Dashboard/UserDashboard/UserDashboard";

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
        path:'/dashboard',
        element:<UserDashboard></UserDashboard>
    }
])
export default router;