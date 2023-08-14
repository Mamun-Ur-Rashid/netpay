import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Home from "../../pages/Home/home/Home";
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
            // {
            //     path: '/mobileRecharge',
            //     element: <MobileRecharge></MobileRecharge>,
            // },
            // {
            //     path: '/sendMoney',
            //     element: <SendMoney></SendMoney>
            // },
            // {
            //     path: '/cashOut',
            //     element: <CashOut></CashOut>
            // },
            // {
            //     path: '/payment',
            //     element: <Payment></Payment>
            // },
        ]
    }
])
export default router;