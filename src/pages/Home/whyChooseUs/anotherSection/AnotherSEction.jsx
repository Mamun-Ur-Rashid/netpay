import img from "../../../../assets/josh-appel.jpg"

const AnotherSEction = () => {
    return (
        <div className="bg-[#1B2654] mt-20 md:flex">
            <div className=" w-1/2 px-2 ">
                <img src={img} alt="" />
            </div>
            <div className="w-1/2 px-4 py-10 ">
                <h1 className="text-white text-center text-4xl">Securely send your money and get online shoping using NetPay.</h1>
                <p className="text-white text-sm my-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam explicabo harum quasi delectus fuga illum, est sequi nobis eos, obcaecati sunt, aspernatur laboriosam error minus repellendus assumenda nihil. Velit, dignissimos!</p>
                <button className="bg-blue-400 text-black">Sign Up Now</button>
            </div>
        </div>
    );
};

export default AnotherSEction;