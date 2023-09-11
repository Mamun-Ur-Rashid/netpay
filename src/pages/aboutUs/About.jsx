import { useEffect } from "react";

const About = () => {
    // Scroll to the top of the page when it loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container mx-auto">

            <h1 className="text-center font-bold text-4xl md:text-4xl mt-20 mb-10">About Us</h1>


            <div className="font-semibold w-5/6 mx-auto">
                <p>
                    Welcome to NetPay. your trusted partner in modern financial solutions. At NetPay, we are committed to revolutionizing the way you manage and transfer money. Our platform offers a seamless and secure environment for all your financial transactions, providing you with the power to send money, make payments, and manage your funds with ease.
                </p>

                <p className="py-4">
                    Our dedicated team of experts has crafted NetPay with the customer in mind. We understand the challenges you face when it comes to transferring money across borders, making payments, and ensuring your financial security. With NetPay, you can bid farewell to the complexities and anxieties of traditional financial systems.

                </p>

                <p>
                    We pride ourselves on innovation, security, and convenience. Our cutting-edge technology ensures that your transactions are swift, reliable, and fully protected. Whether you are a business owner seeking efficient payment solutions or an individual looking to send money to loved ones, NetPay has got you covered.
                </p>
                <p className="py-4">
                    Join us on this journey towards financial empowerment. Discover the NetPay advantage and experience a world of hassle-free money management. Your financial freedom is our mission, and we are here to make it a reality.

                    Security is paramount, and we take it seriously. NetPay employs the latest encryption and verification protocols to ensure that your transactions remain confidential and protected from any threats. Your peace of mind is our priority.

                    But we&apos;re more than just a platform; we&apos;re a community. We&apos;re the bridge connecting people and businesses across the world, enabling growth, fostering relationships, and making dreams possible. Whether you&apos;re an individual with a passion for exploring new horizons or a business owner expanding your reach, NetPay is here to support you every step of the way.

                    Join us as we embark on this journey towards financial empowerment. Discover the NetPay advantage, where convenience meets security, innovation meets tradition, and global connectivity meets local reliability. Your financial aspirations are our driving force, and we&apos;re dedicated to making them a reality.

                    Thank you for choosing NetPay
                </p>
            </div>
        </div>
    );
};

export default About;