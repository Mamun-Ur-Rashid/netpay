import { useEffect } from "react";
import AllService from "../allService/AllService";
import ServiceBanner from "../serviceBanner/ServiceBanner";
import ServiceCard from "../serviceCard/ServiceCard";
import Massage from "../../liveChat/massage/Massage";

const Service = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when it loads
    }, []);

    return (
        <div className='mt- bg-'>
            <ServiceBanner></ServiceBanner>
            <div className="px-8 md:px-24">
                <AllService></AllService>
                <ServiceCard></ServiceCard>
            </div>
            <Massage />
        </div>
    );
};

export default Service;