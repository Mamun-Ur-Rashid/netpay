// import Banner from "../../Banner/Banner";
import Banner from '../../Home/banner/Banner'
import AccountSystem from '../AccountSystem/AccountSystem';
import FinancialSection from '../financialSection/FinancialSection';

const Home = () => {
    return (
        <div className="mt-16">
            {/* <Banner></Banner> */}
            <Banner></Banner>
            <FinancialSection />
            <AccountSystem></AccountSystem>

        </div>
    );
};

export default Home;