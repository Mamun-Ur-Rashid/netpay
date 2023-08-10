import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Home from "../../pages/Home/home/Home";
import MobileRecharge from "../../pages/FinancialPlatform/MobileRecharge/MobileRecharge";
import SendMoney from "../../pages/FinancialPlatform/SendMoney/SendMoney";
import CashOut from "../../pages/FinancialPlatform/CashOut/CashOut";
import Payment from "../../pages/FinancialPlatform/Payment/Payment";
import Service from "../../pages/services/service/Service";

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
                element: <Service></Service>
            },
            {
                path: '/mobileRecharge',
                element: <MobileRecharge></MobileRecharge>,
            },
            {
                path: '/sendMoney',
                element: <SendMoney></SendMoney>
            },
            {
                path: '/cashOut',
                element: <CashOut></CashOut>
            },
            {
                path: '/payment',
                element: <Payment></Payment>
            },
        ]
    }
])
export default router;