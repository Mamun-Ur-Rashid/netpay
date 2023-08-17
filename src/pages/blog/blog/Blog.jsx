import CommonBanner from "../../../shared/commonBanner/CommonBanner";
import img from '../../../assets/blog-banner.jpg'
import DetailsBlog from "../detailsBlog/DetailsBlog";

const Blog = () => {
    return (
        <div className="mt-16 bg-stone-200">
            <CommonBanner BannerImage={img}></CommonBanner>
            <DetailsBlog></DetailsBlog>
        </div>
    );
};

export default Blog;