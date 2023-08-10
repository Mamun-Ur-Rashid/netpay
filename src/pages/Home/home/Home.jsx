// import Banner from "../../Banner/Banner";
import Banner from '../../Home/banner/Banner'
import FinancialCard from "../../FinancialPlatform/FinancialCard/FinancialCard";

const Home = () => {
    return (
        <div className="mt-16">
            {/* <Banner></Banner> */}
            <Banner></Banner>
            <FinancialCard></FinancialCard>

        </div>
    );
};

export default Home;