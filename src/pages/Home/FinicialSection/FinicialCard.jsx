import FinicialHomeCard from "./FinicialHomeCard";
import AOS from 'aos';
import 'aos/dist/aos.css';

const FinicialCard = () => {

    AOS.init();

    return (
        <div className="mt-20">
            {/* <Title title={'Our Service'} subTitle={'Our services are designed to make your rregular financial  transactions convenient and easy'}></Title> */}

            <h1 data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="100"
                className="text-center text-[#4e63b8] text-5xl font-bold">Our Services</h1>
            <p data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="text-center text-black pt-4 font-semibold pb-10">Our services are designed to make your regular financial <br /> transactions convenient and easy.</p>

            <div>
                <FinicialHomeCard></FinicialHomeCard>
            </div>
        </div>
    );
};

export default FinicialCard;