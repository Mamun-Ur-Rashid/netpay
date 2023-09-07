import { useEffect } from "react";
import AllService from "../allService/AllService";
// import ServiceBanner from "../serviceBanner/ServiceBanner";
import ServiceCard from "../serviceCard/ServiceCard";
import BannerImage from '../../../assets/Banner/serviceB.png'

const Service = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when it loads
    }, []);

    return (
        <div className='mt-16 bg-[#070c33]'>
            <div >
                <div className="carousel w-full mb-4 md:mb-8">
                    <img className='h-44 md:h-[450px]' src={BannerImage} alt="" />
                </div>
            </div>
            <div className="px-8 md:px-24">
                <AllService></AllService>
                <ServiceCard></ServiceCard>
            </div>
        </div>
    );
};

export default Service;