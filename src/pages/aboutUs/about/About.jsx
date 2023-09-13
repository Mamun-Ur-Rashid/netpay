import BannerImage from "../../../assets/Banner/aboutB.png";

import DetailsAbout from "../detailsAbout/DetailsAbout";
import { useEffect } from "react";

const About = () => {
    // Scroll to the top of the page when it loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
 
    return (
        <div className="mt-16 bg-[#070b29] pb-20">
            {/* Banner image */}
            {/* Banner image */}

            <div >
                <div className="carousel w-full mb-4 md:mb-8">
                    <img className='h-44 md:h-[450px]' src={BannerImage} alt="" />
                </div>
            </div>
            <DetailsAbout />
        </div>
    );
};

export default About;