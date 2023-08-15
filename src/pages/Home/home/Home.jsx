// import Banner from "../../Banner/Banner";
import Banner from '../../Home/banner/Banner'
import AccountSystem from '../AccountSystem/AccountSystem';
import FinicialSection from '../FinicialSection/FinicialSection';
import TuchPoint from '../TuchPoint/TuchPoint';

const Home = () => {
    return (
        <div className="mt-16 bg-orange-200">

            <Banner></Banner>
            <FinicialSection></FinicialSection>
            <TuchPoint></TuchPoint>
            <AccountSystem></AccountSystem>

        </div>
    );
};

export default Home;