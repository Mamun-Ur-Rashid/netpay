import { useEffect } from "react";
import AOS from 'aos';
import '../business/css/Business.css'
// import cards from "../../assets/allPicture/sidepic.png";

const BusinessBanner = () => {
    const cards = 'https://img.freepik.com/free-vector/organic-flat-people-business-training-illustration_52683-59856.jpg'

    useEffect(() => {
        AOS.init({ duration: 800 });

        return () => {
            AOS.refresh();
        };
    }, []);

    return (
        <div className="bg-blue-50">
            <div className="px-14 md:flex justify-between container mx-auto md:py-16 py-5">
                <div data-aos="fade-right" className=" lg:w-3/5 md:text-left text-center">
                    <h1 className="lg:text-7xl text-5xl space-3 text-slate-700 leading-tight"> Get&apos;s <span className="text-[#4e63b8] font-bold">Business <br /> Solution </span>useing NetPay. </h1>
                    <h1 className="text-black font-semibold text-lg pt-4">Easy way to save your money and time. <br /> Transfer with NetPay.</h1>
                </div>

                <div data-aos="fade-left" className="lg:w-2/5 md:w-1/2">
                    {/* <img src={cards} alt="Cards" className="w-full md:mb-10 sm:mt-5 mx-auto" /> */}
                </div>
            </div>
        </div>
    );
};

export default BusinessBanner;