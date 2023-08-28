import { Link } from "react-router-dom";
import img from "../../../../assets/josh-appel.jpg"

const AnotherSEction = () => {
    return (
        <div className="bg-[#1B2654] mt-20 block md:flex">
            <div className="w-full md:w-1/2  ">
                <img src={img} alt="" />
            </div>
            <div className=" md:w-1/2 px-3 md:px-8 py-2 md:py-10 ">
                <h1 className="text-white text-center font-semibold text-2xl md:text-4xl">Securely send your money and get online shoping using NetPay</h1>
                <p className="text-white text-base md:text-xl my-3 md:my-6">Feel free to adjust the wording to match your brand&apos;s voice and values. This tagline highlights both secure money transfers and the convenience of online shopping through NetPay. Experience Peace of Mind: Seamlessly Send Money and Shop Online with NetPay&apos;s .....</p>
                <Link to='/signup'>
                    <button className="bg-blue-500 text-white py-2 px-4 mx-auto rounded-full w-1/2">
                        Sign Up Now
                    </button>
                </Link>
            </div>


        </div>
    );
};

export default AnotherSEction;