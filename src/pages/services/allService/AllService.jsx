
const AllService = () => {
    const services = [
        { serviceName: 'Send Money', serviceIcon: 'icon' },
        { serviceName: 'Cash Out', serviceIcon: 'Icon' },
        { serviceName: 'Mobile Recharge', serviceIcon: 'Icon' },
        { serviceName: 'Add Money', serviceIcon: 'Icon' },
        { serviceName: 'Add Money', serviceIcon: 'QQQQ' }
    ]
    return (
        <div className="mb-10">
            <h1 className="text-center text-4xl py-10 text-red-500"> Slecet a Service</h1>

            {/* service item */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 ">
                {
                    services?.map((service, index) => (
                        <div key={index} className="bg-white text-black p-4 rounded-lg shadow-md text-center">
                            <p>{service?.serviceIcon}</p>
                            <h1 className="text-2xl mt-6">{service?.serviceName}</h1>
                        </div>
                    ))
                }
            </div>


        </div>
    );
};

export default AllService;