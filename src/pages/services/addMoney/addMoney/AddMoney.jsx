import AllService from "../../allService/AllService";
import ServiceBanner from "../../serviceBanner/ServiceBanner";

const AddMoney = () => {
    return (
        <div className='mt-16 bg-orange-200'>
            <ServiceBanner></ServiceBanner>
            <div className="container mx-auto py-4 px-12 md:px-0 ">
                <AllService></AllService>
                <h1 className="text-center text-4xl py-10 text-red-500"> Add Money</h1>
            </div>
        </div>
    );
};

export default AddMoney;