

const ServiceBanner = ({ BannerImage }) => {

    return (
        <div >
            <div className="carousel w-full mb-4 md:mb-8">
                <img className='h-44 md:h-[450px]' src={BannerImage} alt="" />
            </div>
        </div>

    );
};

export default ServiceBanner;