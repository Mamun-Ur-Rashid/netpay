import SingleCard from "../../services/serviceCard/SingleCard";
import addmoney from "../../../assets/addmoney.png"
import cashout from "../../../assets/cashout.png"
import Aos from "aos";
import 'aos/dist/aos.css';




const FinicialHomeCard = () => {

    Aos.init();

    const cardData = [
        {
            // imageUrl: 'https://media.istockphoto.com/id/591840372/photo/hand-coins-and-the-icon-with-the-plus-sign.jpg?s=612x612&w=0&k=20&c=d6ZTx7miQyWo7YP_RPEStOLBesXdvXe53PJJGkQQBQQ=',
            imageUrl: addmoney,
            title: 'Add Money',
            description: 'Add money from NetPay to another account instantly.',
            buttonText: 'Learn More',
            link: '/services/add-money'
        }
        ,
        {

            imageUrl: 'https://img.freepik.com/free-vector/hand-holding-phone-with-digital-wallet-service-sending-money-payment-transaction-transfer-through-mobile-app-flat-illustration_74855-20589.jpg',
            title: 'Send Money',
            description: 'Send money from NetPay to another account instantly.',
            buttonText: 'Learn More',
            link: '/services/send-money',
        },
        {
            // imageUrl: 'https://www.studytienganh.vn/upload/2021/05/101183.png',
            imageUrl: cashout,
            title: 'Cash Out',
            description: 'Cash Out from NetPay to Your account instantly.',
            buttonText: 'Learn More',
            link: '/services/cash-out'
        }

        // Add more card data
    ];

    return (
        <div className="py-8">
            <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="300"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20">
                {cardData.map((card, index) => (
                    <SingleCard key={index}
                        imageUrl={card?.imageUrl}
                        title={card?.title}
                        link={card?.link}
                        description={card?.description}
                        buttonText={card?.buttonText}></SingleCard>
                ))}
            </div>
            {/* Add the rest of your services page content */}
        </div>
    );
};

export default FinicialHomeCard;