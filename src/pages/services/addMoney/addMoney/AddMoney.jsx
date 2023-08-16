import AllService from "../../allService/AllService";
import AllServicesHeader from "../../allServicesHeader/AllServicesHeader";
import ServiceBanner from "../../serviceBanner/ServiceBanner";

const AddMoney = () => {

    const headerData = {
        imageUrl: 'https://media.istockphoto.com/id/1030875166/photo/sending-money.jpg?s=612x612&w=0&k=20&c=mO8gHQbiLymy0mxdhFbRjHKAUQqPrEBg4NH9bfsbX-g=',
        title: 'Add Money',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel justo eu nisl gravida finibus non at odio. In vestibulum nisi sed lacus commodo, nec feugiat nulla fermentum.',
    };

    return (
        <div className='mt-16 bg-stone-200'>
            <ServiceBanner></ServiceBanner>
            <div className="container mx-auto py-4 px-12 md:px-0 ">
                <AllService></AllService>
                <h1 className="text-center font-bold text-4xl py-10 text-red-500"> Add Money</h1>
                <div className="py-4">
                    <AllServicesHeader
                        imageUrl={headerData?.imageUrl}
                        title={headerData?.title}
                        text={headerData?.text}
                    ></AllServicesHeader>
                </div>
            </div>
        </div>
    );
};

export default AddMoney;