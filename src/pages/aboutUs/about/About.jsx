import CommonBanner from "../../../shared/commonBanner/CommonBanner";
import img from "../../../assets/commonBanner.jpg"
import DetailsAbout from "../detailsAbout/DetailsAbout";

const About = () => {
    return (
        <div className="mt-16 bg-stone-200">
            <CommonBanner BannerImage={img}></CommonBanner>
            <DetailsAbout />
        </div>
    );
};

export default About;