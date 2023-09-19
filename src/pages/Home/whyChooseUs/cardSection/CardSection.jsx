import img from "../../../../assets/icon/treasury.png"
import img2 from "../../../../assets/icon/salary.png"
import img3 from "../../../../assets/icon/online-banking.png"
import Aos from "aos";
import 'aos/dist/aos.css';


const CardSection = () => {

    Aos.init();

    return (
        <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-9 mt-6  md:px-2">
            <div
                data-aos="zoom-in-right"
                data-aos-duration="500"
                data-aos-delay="100" className=" py-1 pt-2 w-full mx-auto  md:flex text-black bg-[#e5e5e5] rounded-lg shadow-neutral-400 shadow-xl">
                <div className="flex justify-center items-center w-1/4 md:w-1/6 mx-auto md:ml-4" >
                    <img src={img} alt="" />
                </div>
                <div className="md:w-3/4 mx-auto px-4  ">
                    <h1 className="text-center md:text-left text-3xl pt-4 font-semibold pb-1 ">Fraud Detection</h1>
                    <h3 className="text-sm md:text-base  py-2 pb-6"> The Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create.</h3>
                </div>
            </div>
            <div
                data-aos="zoom-in-left"
                data-aos-duration="500"
                data-aos-delay="200" className=" py-1 pt-2 w-full mx-auto  md:flex text-black bg-[#e5e5e5] rounded-lg shadow-neutral-400 shadow-xl">
                <div className="flex w-1/4 md:w-1/6 mx-auto items-center justify-center md:ml-4" >
                    <img src={img2} alt="" />
                </div>
                <div className="md:w-3/4 mx-auto px-4">
                    <h1 className=" text-center md:text-left text-3xl mt-4 md:text-3xl font-semibold pb-1">Payment Invoice</h1>
                    <h3 className="text-sm md:text-base pb-6 py-2"> Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create</h3>
                </div>
            </div>
            <div
                data-aos="zoom-in-right"
                data-aos-duration="500"
                data-aos-delay="300" className="py-1 pt-2 w-full mx-auto  md:flex text-black bg-[#e5e5e5] rounded-lg shadow-neutral-400 shadow-xl">
                <div className="flex justify-center items-center md:ml-4 w-1/4 md:w-1/6 mx-auto" >
                    <img src={img3} alt="" />
                </div>
                <div className="md:w-3/4 mx-auto px-4">
                    <h1 className="text-center md:text-left text-3xl pt-4 md:text-3xl font-semibold pb-1">Payments Types</h1>
                    <h3 className="text-sm md:text-base pb-6 py-2"> Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create.</h3>
                </div>
            </div>
            <div data-aos="zoom-in-left"
                data-aos-duration="500"
                data-aos-delay="400" className="py-1 pt-2 w-full mx-auto  md:flex text-black bg-[#e5e5e5] rounded-lg shadow-neutral-400 shadow-xl">
                <div className="flex justify-center items-center md:ml-4 w-1/4 md:w-1/6 mx-auto" >
                    <img src={img} alt="" />
                </div>
                <div className="md:w-3/4 mx-auto px-4">
                    <h1 className="text-center md:text-left text-3xl pt-4 md:text-3xl font-semibold pb-1">Fraud Detection</h1>
                    <h3 className="text-sm md:text-base pb-6 py-2"> Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create.</h3>
                </div>
            </div>




        </div>
    );
};

export default CardSection;