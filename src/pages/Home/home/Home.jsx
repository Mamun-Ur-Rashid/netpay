// import Banner from "../../Banner/Banner";
import { useEffect } from 'react';
import Banner from '../../Home/banner/Banner'
import AccountSystem from '../AccountSystem/AccountSystem';
import FinicialCard from '../FinicialSection/FinicialCard';
import TuchPoint from '../TuchPoint/TuchPoint';
import WhyChooseUs from '../whyChooseUs/WhyChooseUs';
import AnotherSEction from '../whyChooseUs/anotherSection/AnotherSEction';
import Massage from '../../liveChat/massage/Massage';


const Home = () => {

    // Scroll to the top of the page when it loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="">
            <Banner></Banner>
            <div className='px-6 md:px-24'>
                <FinicialCard></FinicialCard>
                <WhyChooseUs></WhyChooseUs>
                <TuchPoint></TuchPoint>
                <AnotherSEction></AnotherSEction>
                <AccountSystem></AccountSystem>
                {/* <LatestNewes></LatestNewes> */}
                <Massage />
            </div>

        </div>
    );
};

export default Home;