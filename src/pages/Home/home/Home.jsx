// import Banner from "../../Banner/Banner";
import Banner from '../../Home/banner/Banner'
import FinancialCard from "../../FinancialPlatform/FinancialCard/FinancialCard";
import AccountSystem from '../AccountSystem/AccountSystem';
import TuchPoint from '../TuchPoint/TuchPoint';

const Home = () => {
    return (
        <div className="mt-16">
            {/* <Banner></Banner> */}
            <Banner></Banner>
            <FinancialCard></FinancialCard>
            <TuchPoint></TuchPoint>
            <AccountSystem></AccountSystem>

        </div>
    );
};

export default Home;