import Banner from "../../Banner/Banner";
import FinancialCard from "../../FinancialPlatform/FinancialCard/FinancialCard";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FinancialCard></FinancialCard>
            <h1 className='text-center text-5xl font-bold'>This is Home </h1>
            <h1 className='text-center text-5xl font-bold'>this is banner section</h1>
        </div>
    );
};

export default Home;