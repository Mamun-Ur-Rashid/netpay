import ServiceCard from "../../services/serviceCard/ServiceCard";
import FinicialHomeCard from "./FinicialHomeCard";

const FinicialCard = () => {
    return (
        <div>
            <div>
                <h1 className="text-center font-bold text-5xl my-5"><span className="border-b-4 border-orange-700 text-orange-700">Our Services</span></h1>
                <p className="mt-5 text-center">Our services are designed to make your rregular financial <br /> transactions convenient and easy</p>
            </div>
            <div>
                <FinicialHomeCard></FinicialHomeCard>
            </div>
        </div>
    );
};

export default FinicialCard;