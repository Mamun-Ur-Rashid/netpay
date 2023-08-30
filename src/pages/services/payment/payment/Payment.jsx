import Title from "../../../../shared/title/Title";
import AllService from "../../allService/AllService";
import Faq from "../../allServicesFAQ/Faq";
import AllServicesHeader from "../../allServicesHeader/AllServicesHeader";
import ServiceBanner from "../../serviceBanner/ServiceBanner";

const Payment = () => {

    const headerData = {
        imageUrl: 'https://media.istockphoto.com/id/1030875166/photo/sending-money.jpg?s=612x612&w=0&k=20&c=mO8gHQbiLymy0mxdhFbRjHKAUQqPrEBg4NH9bfsbX-g=',
        title: 'Payment',
        text: 'Payment seytem is now more than easier to using NetPay. You can get any bill to using your NetPay account.',
        btnText: 'Payment Now'
    };

    const faqData = [
        {
            question: 'What happent when I am not in country?',
            answer: `If you are in Bangladesh, but the unable to log in please follow these steps
            1. Ensure there is no VPN running in the background
            2. Please try to log in using mobile data
            3. Ensure Bangladeshi SIM is inserted into the phone
            4. Try closing the app and clear it from the background and restart the app
            5. If the problem still persists, please share your IP and address and ISP name to the bKash customer service channels. 
            (Note: you can find your IP, simply by searching "What is my IP address" in google.com, and your ISP name is the name of your Internet service provider which can be found in the internet bill receipt)`,
        },
        {
            question: 'Definitions',
            answer: `
            a. NetPay Account
                
            
            - A virtual storage of money that can be accessed through your mobile phone. After registration, your mobile number will be your NetPay Account number.
         
         b. Open an Account
         
              - Opening a NetPay Account on your mobile phone.  
         
         c. NetPay Mobile Menu
              - The menu you see after dialing *247#.
         
         d. Cash In 
              - Depositing money into your NetPay Account.
         
         e. Cash Out
            - Withdrawing money from your NetPay Account. You can Cash Out from any NetPay Agent Point or from BRAC Bank or any Q-Cash ATM.
         
         f. Send Money
              - Transferring money from one NetPay Account to another NetPay Account.
         
         g. Mobile Recharge
              - Mobile Recharge service allows you to recharge your Mobile Phone Balance from your NetPay Account.
         
         h. Payment
             - When you pay from your NetPay Account to a seller against a product or service you purchase.
         
         i. Remittance
              - Receiving funds from abroad in your NetPay Account in Bangladesh.
         
         j. NetPay Mobile Menu PIN
             - This is a secret number, like a password, that secures your NetPay Account.
         
         k. Security Code
             - Security Code is a one time PIN. When you Cash Out from the ATM, you need to generate a Security Code which can be used only once and remains valid for 5 minutes.
         
         l. Transaction ID
             - A system-generated unique reference number against each transaction that is preserved as identification.
         
         m. Reference
             - Mentioning the purpose of the transaction for your own records.
            `,
        },
        {
            question: 'Can I make transfer 14/7 using NetPay?',
            answer: 'Yes .',
        },
        {
            question: 'Who can open a NetPay account?',
            answer: `Bangladeshi National
            - Age 18 years or above
            - Having a valid Photo national ID/Passport/Driving License 
            - Currently Robi, Grameenphone, Banglalink, Teletalk and Airtel subscribers`,
        },
        // Add more FAQ data
    ];

    return (
        <div className='mt-16 bg-[#070b29]'>
            <ServiceBanner></ServiceBanner>
            <div className="px-8 md:px-24">
                <AllService></AllService>
                <Title title={'Payment'} />
                <div className="py-4">
                    <AllServicesHeader
                        imageUrl={headerData?.imageUrl}
                        title={headerData?.title}
                        text={headerData?.text}
                        btnText={headerData?.btnText}
                    ></AllServicesHeader>
                </div>
                <div className="bg-[#1B2654] p-8 mt-10">
                    <Faq faqData={faqData}></Faq>
                </div>
            </div>
        </div>
    );
};

export default Payment;