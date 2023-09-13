import Title from "../../../shared/title/Title";
import FinicialHomeCard from "./FinicialHomeCard";

const FinicialCard = () => {
    return (
        <div className="mt-20">
            {/* <Title title={'Our Service'} subTitle={'Our services are designed to make your rregular financial  transactions convenient and easy'}></Title> */}

            <h1 className="text-center text-blue-500 text-5xl font-bold">Our Services</h1>
            <p className="text-center text-black pt-4 font-semibold pb-10">Our services are designed to make your regular financial <br /> transactions convenient and easy.</p>

            <div>
                <FinicialHomeCard></FinicialHomeCard>
            </div>
        </div>
    );
};

export default FinicialCard;