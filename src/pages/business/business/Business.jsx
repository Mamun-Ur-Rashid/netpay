import BannerImage from "../../../assets/Banner/busniessB.png";
import DetailsBusiness from "../detailsBusiness/DetailsBusiness";
import { useEffect } from "react";

const Business = () => {

    // Scroll to the top of the page when it loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className=" mt-16 bg-[#070b29]">
            {/* Banner image */}
            <div >
                <div className="carousel w-full mb-4 md:mb-8">
                    <img className='h-44 md:h-[450px]' src={BannerImage} alt="" />
                </div>
            </div>
            <div className=" ">
                <DetailsBusiness></DetailsBusiness>
            </div>
        </div>
    );
};

export default Business;