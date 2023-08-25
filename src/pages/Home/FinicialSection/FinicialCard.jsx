import FinicialHomeCard from "./FinicialHomeCard";

const FinicialCard = () => {
    return (
        <div>
            <div >
                <h1 className="text-center font-bold text-4xl md:text-5xl text-red-600">Our Services</h1>
                <p className="mt-1 text-sm md:text-2xl text-center text-white">Our services are designed to make your rregular financial  transactions convenient and easy</p>
            </div>
            <div>
                <FinicialHomeCard></FinicialHomeCard>
            </div>
        </div>
    );
};

export default FinicialCard;