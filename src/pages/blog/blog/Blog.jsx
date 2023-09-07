import { useEffect } from "react";
import BannerImage from "../../../assets/Banner/blogB.png";

import DetailsBlog from "../detailsBlog/DetailsBlog";

const Blog = () => {

    // Scroll to the top of the page when it loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="mt-16 bg-[#070b29]">
            {/* Banner image */}
            <div >
                <div className="carousel w-full mb-4 md:mb-8">
                    <img className='h-44 md:h-[450px]' src={BannerImage} alt="" />
                </div>
            </div>
            <DetailsBlog></DetailsBlog>
        </div>
    );
};

export default Blog;