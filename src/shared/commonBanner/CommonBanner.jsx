

const CommonBanner = ({ BannerImage }) => {
    return (
        <div
            className="bg-cover bg-center h-80 md:h-96 flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${BannerImage})` }}

        >
        </div>
    );
};

export default CommonBanner;