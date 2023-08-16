import AllService from "../../allService/AllService";
import Faq from "../../allServicesFAQ/Faq";
import AllServicesHeader from "../../allServicesHeader/AllServicesHeader";
import ServiceBanner from "../../serviceBanner/ServiceBanner";

const Payment = () => {

    const headerData = {
        imageUrl: 'https://media.istockphoto.com/id/1030875166/photo/sending-money.jpg?s=612x612&w=0&k=20&c=mO8gHQbiLymy0mxdhFbRjHKAUQqPrEBg4NH9bfsbX-g=',
        title: 'Payment',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel justo eu nisl gravida finibus non at odio. In vestibulum nisi sed lacus commodo, nec feugiat nulla fermentum.',
    };

    const faqData = [
        {
            question: 'How can I send money?',
            answer: 'You can easily send money by logging into your account and selecting the "Send Money" option.You can easily send money by logging into your account and selecting the "Send Money" option.You can easily send money by logging into your account and selecting the "Send Money" option.You can easily send money by logging into your account and selecting the "Send Money" option.You can easily send money by logging into your account and selecting the "Send Money" option.',
        },
        {
            question: 'What payment methods are supported?',
            answer: 'We support a wide range of payment methods, including credit cards, bank transfers, and digital wallets.You can easily send money by logging into your account and selecting the "Send Money" option.You can easily send money by logging into your account and selecting the "Send Money" option.You can easily send money by logging into your account and selecting the "Send Money" option.You can easily send money by logging into your account and selecting the "Send Money" option.',
        },
        {
            question: 'What payment methods are supported?',
            answer: 'We support a wide range of payment methods, including credit cards, bank transfers, and digital wallets.You can easily send money by logging into your account and selecting the "Send Money" option.You can easily send money by logging into your account and selecting the "Send Money" option.You can easily send money by logging into your account and selecting the "Send Money" option.You can easily send money by logging into your account and selecting the "Send Money" option.',
        },
        {
            question: 'What payment methods are supported?',
            answer: 'We support a wide range of payment methods, including credit cards, bank transfers, and digital wallets.You can easily send money by logging into your account and selecting the "Send Money" option.You can easily send money by logging into your account and selecting the "Send Money" option.You can easily send money by logging into your account and selecting the "Send Money" option.',
        },
        // Add more FAQ data
    ];

    return (
        <div className='mt-16 bg-stone-200'>
            <ServiceBanner></ServiceBanner>
            <div className="container mx-auto py-4 px-12 md:px-0 ">
                <AllService></AllService>
                <h1 className="text-center text-4xl py-10 text-red-500"> Payment</h1>
                <div className="py-4">
                    <AllServicesHeader
                        imageUrl={headerData?.imageUrl}
                        title={headerData?.title}
                        text={headerData?.text}
                    ></AllServicesHeader>
                </div>
                <Faq faqData={faqData}></Faq>
            </div>
        </div>
    );
};

export default Payment;