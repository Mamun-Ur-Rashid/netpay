import AllService from "../allService/AllService";
import ServiceBanner from "../serviceBanner/ServiceBanner";
import ServiceCard from "../serviceCard/ServiceCard";

const Service = () => {
    return (
        <div className='mt-16'>
            <ServiceBanner></ServiceBanner>
            <div className="container mx-auto py-4 px-12 md:px-0">
                <AllService></AllService>
                <ServiceCard></ServiceCard>

            </div>
        </div>
    );
};

export default Service;