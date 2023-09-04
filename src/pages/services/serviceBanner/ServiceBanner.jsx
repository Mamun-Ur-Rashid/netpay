import BannerImage from '../../../assets/serviceBanner.jpg'

const ServiceBanner = () => {

    // const BannerImage = "https://static.vecteezy.com/system/resources/previews/001/879/488/non_2x/24-hour-customer-service-to-help-users-solve-problems-chatting-service-helps-question-with-technical-issue-flat-illustration-for-landing-page-web-website-banner-mobile-apps-flyer-poster-free-vector.jpg"

    return (
        <div
            className="bg-cover bg-center h-80 md:h-96 flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${BannerImage})` }}
        >
        </div>

    );
};

export default ServiceBanner;