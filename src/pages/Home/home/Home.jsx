// import Banner from "../../Banner/Banner";
import Banner from '../../Home/banner/Banner'
import FinancialCard from "../../FinancialPlatform/FinancialCard/FinancialCard";
import AccountSystem from '../AccountSystem/AccountSystem';

const Home = () => {
    return (
        <div className="mt-16">
            {/* <Banner></Banner> */}
            <Banner></Banner>
            <FinancialCard></FinancialCard>
            <AccountSystem></AccountSystem>

        </div>
    );
};

export default Home;