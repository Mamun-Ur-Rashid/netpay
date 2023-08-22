import { useEffect } from "react";
import AllService from "../allService/AllService";
import ServiceBanner from "../serviceBanner/ServiceBanner";
import ServiceCard from "../serviceCard/ServiceCard";

const Service = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when it loads
    }, []);

    return (
        <div className='mt-16 bg-[#070b29] '>
            <ServiceBanner></ServiceBanner>
            <div className="container mx-auto">
                <AllService></AllService>
                <ServiceCard></ServiceCard>
            </div>
        </div>
    );
};

export default Service;