import "react-responsive-carousel/lib/styles/carousel.min.css";
import cards from "../../../assets/cards.png"


const Banner = () => {
    return (
        <div >

            <div className="flex mx-auto w-3/4 mt-5 pt-20">

                <div className="mr-[00px] w-1/2">
                    <h1 className="text-7xl space-3 text-slate-700 leading-tight">Online <span className="text-blue-500 font-bold">money <br /> transfer </span> made simple.</h1>
                    <h1 className="text-black font-semibold text-lg pt-4">Easy way to save your money and time. <br /> Transfer with NetPay.</h1>
                </div>

                <div className="w-1/2">
                    <img src={cards} className="w-[1000px] " />
                </div>

            </div>




        </div>
    );
};

export default Banner;