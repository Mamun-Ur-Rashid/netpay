import Title from "../../../shared/title/Title";
import FinicialHomeCard from "./FinicialHomeCard";

const FinicialCard = () => {
    return (
        <div>
            <Title title={'Our Service'} subTitle={'Our services are designed to make your rregular financial  transactions convenient and easy'}></Title>
            <div>
                <FinicialHomeCard></FinicialHomeCard>
            </div>
        </div>
    );
};

export default FinicialCard;