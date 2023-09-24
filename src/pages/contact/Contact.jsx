import { useEffect } from "react";
import Button from "../../shared/button/Button";
import Title from "../../shared/title/Title";
import ContactForm from "./ContactForm";
import ContactBanner from "./ContactBanner";
// import ContactMap from "./ContactMap";

const Contact = () => {

    // Scroll to the top of the page when it loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <ContactBanner />
            <Title title={'Contact Us '} subTitle={`Want to talk to us? Feel free to knock anytime for any queries regarding NetPay.`} />

            <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 gap-8 ">
                    {/* Contact Information */}
                    <div className=" p-4 mb-20 bg-gray-100 rounded-lg shadow-gray-200 shadow-lg text-black">
                        <h2 className="text-lg md:text-3xl text-center font-semibold mb-4 underline underline-offset-4">Contact Information</h2>
                        <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 p-4 md:p-6 lg:p-8">

                            {/* Call */}
                            <div className="flex items-center justify-around mb-2 shadow-lg p-2 rounded-lg">
                                <div className="w-6 h-6 mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>


                                </div>
                                <div>
                                    <h1 className="text-xl font-bold">Call Us</h1>
                                    <span>+1 (123) 456-7890</span>
                                </div>
                                <a
                                    href="tel:+11234567890"
                                    className="ml-2 text-blue-500 hover:underline"
                                >
                                    <Button text={'Call'} />

                                </a>
                            </div>

                            {/* Email */}
                            <div className="flex items-center justify-around mb-2 shadow-lg p-2 rounded-lg">
                                <div className="w-6 h-6 mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>

                                </div>
                                <div>
                                    <h1 className="text-xl font-bold">Email Us</h1>
                                    <span>info@netpay.com</span>
                                </div>
                                <a
                                    href="mailto:info@netpay.com"
                                    className="ml-2 text-blue-500 hover:underline"
                                >
                                    <Button text={'Email'} />
                                </a>
                            </div>

                            {/* Carraer Email */}
                            <div className="flex items-center justify-around mb-2 shadow-lg p-2 rounded-lg">
                                <div className="w-6 h-6 mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>

                                </div>
                                <div>
                                    <h1 className="text-xl font-bold">Career</h1>
                                    <span>contact@example.com</span>
                                </div>
                                <a
                                    href="mailto:contact@example.com"
                                    className="ml-2 text-blue-500 hover:underline"
                                >
                                    <Button text={'Email'} />
                                </a>
                            </div>

                            {/* Head Office Location */}
                            <div className="flex items-center justify-around mb-2 shadow-lg p-2 rounded-lg">
                                <div className="w-6 h-6 mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>

                                </div>
                                <div>
                                    <h1 className="text-xl font-bold">Head Office</h1>
                                    <span> ABC Tower ABC Road, ABC City, Country</span>
                                </div>
                                <a
                                    href=""
                                    className="ml-2 text-blue-500 hover:underline"
                                >
                                    <Button text={'direction'} />
                                </a>

                            </div>
                        </div>

                    </div>

                    {/* Map */}
                    {/* <div>
                        <h2 className="text-lg md:text-3xl text-center font-semibold mb-4 underline underline-offset-4">Location</h2>
                        <div className="max-w-xl mx-auto">
                            <ContactMap />
                        </div>
                    </div> */}

                </div>

                <ContactForm />
            </div>



        </div>
    );
};

export default Contact;


