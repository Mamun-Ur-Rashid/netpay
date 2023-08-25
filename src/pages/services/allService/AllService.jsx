import { Link } from "react-router-dom";
import img from "../../../assets/icon/treasury.png"
import cashOutImg from "../../../assets/icon/salary.png"
import mobileImg from "../../../assets/icon/online-banking.png"
import paymentImg from "../../../assets/icon/icons8-cash-and-credit-card-48.png"
import addMoneyImg from "../../../assets/icon/addMoney.png"


const AllService = () => {

    const services = [
        { serviceName: 'Send Money', serviceIcon: img, link: '/services/send-money' },
        { serviceName: 'Cash Out', serviceIcon: cashOutImg, link: '/services/cash-out' },
        { serviceName: 'Add Money', serviceIcon: addMoneyImg, link: '/services/add-money' },
        { serviceName: 'Payment', serviceIcon: paymentImg, link: '/services/payment' },
        { serviceName: 'Mobile Recharge', serviceIcon: mobileImg, link: '/services/mobile-recharge' },
    ]
    return (
        <div className="mb-10">
            <h1 className="text-center font-bold text-4xl md:text-4xl py-10 text-red-500"> Select a Service</h1>
            {/* service item */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 ">
                {
                    services?.map((service, index) => (
                        // console.log(service)
                        <div key={index} className="bg-[#1B2654] hover:bg-[#17aac9] text-white p-4 rounded-lg shadow-md text-center">

                            <Link to={service?.link}>
                                <img className="w-1/3 mx-auto" src={service?.serviceIcon} alt="" />
                                <h1 className="text-2xl mt-6 font-bold ">{service?.serviceName}</h1>
                            </Link>
                        </div>
                    ))
                }
            </div>


        </div>
    );
};

export default AllService;