import BannerImage from "../../../assets/Banner/supportB.png";

import DetailsHelp from "../detailsHelp/DetailsHelp";

const Help = () => {
    return (
        <div className="mt-16 bg-[#070b29]">
            {/* Banner image */}
            <div >
                <div className="carousel w-full mb-4 md:mb-8">
                    <img className='h-44 md:h-[450px]' src={BannerImage} alt="" />
                </div>
            </div>
            <DetailsHelp></DetailsHelp>
        </div>
    );
};

export default Help;