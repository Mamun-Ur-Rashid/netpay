import { Link } from "react-router-dom";

const AllService = () => {
    const services = [
        { serviceName: 'Send Money', serviceIcon: 'icon', link: '/services/send-money' },
        { serviceName: 'Cash Out', serviceIcon: 'Icon', link: '/services/cash-out' },
        { serviceName: 'Add Money', serviceIcon: 'Icon', link: '/services/add-money' },
        { serviceName: 'Payment', serviceIcon: 'QQQQ', link: '/services/payment' },
        { serviceName: 'Mobile Recharge', serviceIcon: 'Icon', link: '/services/mobile-recharge' },
    ]
    return (
        <div className="mb-10">
            <h1 className="text-center font-bold text-4xl md:text-4xl py-10 text-red-500"> Select a Service</h1>
            {/* service item */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 ">
                {
                    services?.map((service, index) => (
                        <div key={index} className="bg-[#1B2654] hover:bg-[#17aac9] text-white p-4 rounded-lg shadow-md text-center">
                            <Link to={service?.link}>
                                <p>{service?.serviceIcon}</p>
                                <h1 className="text-2xl mt-6">{service?.serviceName}</h1>
                            </Link>
                        </div>
                    ))
                }
            </div>


        </div>
    );
};

export default AllService;