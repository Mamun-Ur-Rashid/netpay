// import Banner from "../../Banner/Banner";
import { useEffect } from 'react';
import Banner from '../../Home/banner/Banner'
import AccountSystem from '../AccountSystem/AccountSystem';
import FinicialCard from '../FinicialSection/FinicialCard';
import TuchPoint from '../TuchPoint/TuchPoint';
import WhyChooseUs from '../whyChooseUs/WhyChooseUs';
import AnotherSEction from '../whyChooseUs/anotherSection/AnotherSEction';
import img from "../../../assets/josh-appel.jpg"

const Home = () => {

    // Scroll to the top of the page when it loads
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);

    return (
        <div className="mt-16 bg-[#070c33]">
            <Banner></Banner>
            <div className='px-6 md:px-24'>
                <FinicialCard></FinicialCard>
                <TuchPoint></TuchPoint>
                <WhyChooseUs></WhyChooseUs>
                <AnotherSEction></AnotherSEction>

                <AccountSystem></AccountSystem>
            </div>

        </div>
    );
};

export default Home;