import Title from "../../../shared/title/Title";
import CardSection from "./cardSection/CardSection";
import Aos from "aos";
import 'aos/dist/aos.css';

const WhyChooseUs = () => {
    Aos.init();
    return (
        <div className=" mt-8 md:mt-4 pt-16">
            <div data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-delay="100">
                <Title title={'Why Choose Us'} subTitle={'We help agencies to define their new business objectives and then create professional software.'}></Title>
                <CardSection></CardSection>
            </div>
        </div>
    );
};

export default WhyChooseUs;