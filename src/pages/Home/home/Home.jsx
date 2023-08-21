// import Banner from "../../Banner/Banner";
import Banner from '../../Home/banner/Banner'
import AccountSystem from '../AccountSystem/AccountSystem';
import FinicialCard from '../FinicialSection/FinicialCard';
import TuchPoint from '../TuchPoint/TuchPoint';

const Home = () => {
    return (
        <div className="mt-16 bg-[#070b29]">
            <Banner></Banner>
            <div className='px-20 md:px-24'>
                <FinicialCard></FinicialCard>
                <TuchPoint></TuchPoint>
                <AccountSystem></AccountSystem>
            </div>

        </div>
    );
};

export default Home;