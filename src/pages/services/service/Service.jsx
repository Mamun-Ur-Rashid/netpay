import AllService from "../allService/AllService";
import ServiceBanner from "../serviceBanner/ServiceBanner";

const Service = () => {
    return (
        <div className='mt-16'>
            <ServiceBanner></ServiceBanner>
            <div className="container mx-auto py-4">
                <AllService></AllService>

            </div>
        </div>
    );
};

export default Service;