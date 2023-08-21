import CommonBanner from "../../../shared/commonBanner/CommonBanner";
import img from '../../../assets/businessBanner.jpg'
import DetailsBusiness from "../detailsBusiness/DetailsBusiness";

const Business = () => {
    return (
        <div className="mt-16 bg-[#070b29]">
            <CommonBanner BannerImage={img}></CommonBanner>
            <DetailsBusiness></DetailsBusiness>
        </div>
    );
};

export default Business;