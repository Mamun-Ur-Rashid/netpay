import CommonBanner from "../../../shared/commonBanner/CommonBanner";
import img from "../../../assets/commonBanner.jpg"
import DetailsAbout from "../detailsAbout/DetailsAbout";
import { useEffect } from "react";

const About = () => {
    // Scroll to the top of the page when it loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="mt-16 bg-[#070b29] pb-20">
            <CommonBanner BannerImage={img}></CommonBanner>
            <DetailsAbout />
        </div>
    );
};

export default About;