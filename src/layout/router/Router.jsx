import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Home from "../../pages/Home/home/Home";
import Services from "../../pages/services/Services";
import MobileRecharge from "../../pages/FinancialPlatform/MobileRecharge/MobileRecharge";

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
                element: <Services></Services>
            },
            {
                path: '/mobileRecharge',
                element: <MobileRecharge></MobileRecharge>,
            }
        ]
    }
])
export default router;