import { Link } from "react-router-dom";
import img from "../../../../assets/josh-appel.jpg"

const AnotherSEction = () => {
    return (
        <div className="bg-[#1B2654] mt-20 block md:flex">
            <div className="w-full md:w-1/2 md:px-2 ">
                <img src={img} alt="" />
            </div>
            <div className=" md:w-1/2 px-8 py-6 md:py-10 ">
                <h1 className="text-white text-center text-3xl md:text-4xl">Securely send your money and get online shoping using NetPay.</h1>
                <p className="text-white text-sm  my-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam explicabo harum quasi delectus fuga illum, est sequi nobis eos, obcaecati sunt, aspernatur laboriosam error minus repellendus assumenda nihil. Velit, dignissimos!</p>
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