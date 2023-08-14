import BannerImage from '../../../assets/serviceBanner.jpg'

const ServiceBanner = () => {
    return (
        <div
            className="bg-cover bg-center h-80 md:h-96 flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${BannerImage})` }}
        >
            <div className="max-w-3xl mx-auto px-6 text-center">
                <h2 className="text-3xl text-black font-semibold mb-4">Unlocking Financial Freedom with Our Services</h2>
                <p className="text-lg text-black opacity-75">
                    Welcome to NetPay&apos;s Services Page! At NetPay, we&apos;re committed to providing you with a range of innovative and secure financial services designed to simplify your life. Our dedicated team has crafted these services with you in mind, ensuring that every transaction is swift, secure, and tailored to your needs.
                </p>
                {/* Add the rest of your banner content here */}
            </div>
        </div>

    );
};

export default ServiceBanner;