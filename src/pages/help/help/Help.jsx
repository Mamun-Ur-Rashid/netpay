import CommonBanner from "../../../shared/commonBanner/CommonBanner";
import img from "../../../assets/help.jpg"
import DetailsHelp from "../detailsHelp/DetailsHelp";

const Help = () => {
    return (
        <div className="mt-16 bg-stone-200">
            <CommonBanner BannerImage={img}></CommonBanner>
            <DetailsHelp></DetailsHelp>
        </div>
    );
};

export default Help;