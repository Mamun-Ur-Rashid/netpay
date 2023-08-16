import AllService from "../../allService/AllService";
import AllServicesHeader from "../../allServicesHeader/AllServicesHeader";
import ServiceBanner from "../../serviceBanner/ServiceBanner";

const CashOut = () => {

    const sendMoneyHeader = {
        imageUrl: 'https://media.istockphoto.com/id/1030875166/photo/sending-money.jpg?s=612x612&w=0&k=20&c=mO8gHQbiLymy0mxdhFbRjHKAUQqPrEBg4NH9bfsbX-g=',
        title: 'Cash Out',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel justo eu nisl gravida finibus non at odio. In vestibulum nisi sed lacus commodo, nec feugiat nulla fermentum.',
    };

    return (
        <div className='mt-16 bg-stone-200'>
            <ServiceBanner></ServiceBanner>
            <div className="container mx-auto py-4 px-12 md:px-0 ">
                <AllService></AllService>
                <h1 className="text-center font-bold text-4xl py-10 text-red-500"> Cash Out</h1>
                <div className="py-4">
                    <AllServicesHeader
                        imageUrl={sendMoneyHeader?.imageUrl}
                        title={sendMoneyHeader?.title}
                        text={sendMoneyHeader?.text}
                    ></AllServicesHeader>
                </div>
            </div>
        </div>
    );
};

export default CashOut;