import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS file
import cards from "../../../assets/sidepic.png";
import back from "../../../assets/background.png";

const Banner = () => {
    useEffect(() => {
        AOS.init({ duration: 800 });
        // Optionally, you can refresh AOS when the component unmounts
        return () => {
            AOS.refresh();
        };
    }, []);

    return (
        <div style={{ backgroundImage: `url(${back})`, backgroundSize: 'cover' }} className="bg-blue-50">
            <div className="px-14 flex justify-between container mx-auto py-16">
                <div data-aos="fade-right" className="mr-0 w-1/2">
                    <h1 className="text-7xl space-3 text-slate-700 leading-tight">Online <span className="text-[#4e63b8] font-bold">money <br /> transfer </span> made simple.</h1>
                    <h1 className="text-black font-semibold text-lg pt-4">Easy way to save your money and time. <br /> Transfer with NetPay.</h1>
                </div>

                <div data-aos="fade-left" className="w-1/2">
                    <img src={cards} alt="Cards" className="w-full mb-10 ml-5 mx-auto" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
