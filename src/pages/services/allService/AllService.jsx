
const AllService = () => {
    const services = [
        { serviceName: 'Send Money', serviceIcon: 'QQQQ' },
        { serviceName: 'Cash Out', serviceIcon: 'QQQQ' },
        { serviceName: 'Mobile Recharge', serviceIcon: 'QQQQ' },
        { serviceName: 'Add Money', serviceIcon: 'QQQQ' },
        { serviceName: 'Add Money', serviceIcon: 'QQQQ' }
    ]
    return (
        <div>
            <h1 className="text-center text-4xl py-8 text-red-500"> Slecet a Service</h1>

            {/* service item */}
            <div className="flex md:justify-evenly ">
                {
                    services?.map((service, index) => (
                        <div key={index}>
                            <p>{service?.serviceIcon}</p>
                            <h1 className="text-2xl">{service?.serviceName}</h1>
                        </div>
                    ))
                }
            </div>


        </div>
    );
};

export default AllService;