import AllService from "../allService/AllService";
import ServiceBanner from "../serviceBanner/ServiceBanner";

const Service = () => {
    return (
        <div className='mt-16'>
            <ServiceBanner></ServiceBanner>
            <AllService></AllService>
        </div>
    );
};

export default Service;