import SingleCard from "./SingleCard";

const ServiceCard = () => {

    const cardData = [
        {
            imageUrl: 'https://img.freepik.com/free-vector/people-using-mobile-bank-remittance-money_74855-6617.jpg?w=2000',
            title: 'Send Money',
            description: 'Send money from NetPay to another acount instanly.',
            buttonText: 'Learn More',
            link: '/services/send-money',
        },
        {
            imageUrl: 'https://img.freepik.com/premium-vector/3d-cartoon-smartphone-with-credit-card-money-online-payment-concept-mobile-wallet-application-banking-app-transfer-money-via-smartphone-vector-3d-illustration_221648-593.jpg',
            title: 'Cash Out',
            description: 'Cash Out from NetPay to Your acount instanly.',
            buttonText: 'Learn More',
            link: '/services/cash-out'
        },
        {
            imageUrl: 'https://img.freepik.com/free-vector/transfer-money-concept-illustration_114360-3762.jpg?w=2000',
            title: 'Add Money',
            description: 'Add money from NetPay to another acount instanly.',
            buttonText: 'Learn More',
            link: '/services/add-money'
        },
        {
            imageUrl: 'https://i.pinimg.com/736x/95/a1/d0/95a1d0a1226d81bde38336c7eee5c5d4.jpg',
            title: 'Payment',
            description: 'Payment from NetPay to another acount instanly.',
            buttonText: 'Learn More',
            link: '/services/payment'
        },
        {
            imageUrl: 'https://www.specificstep.com/wp-content/uploads/2021/06/mobile-recharge-apiimg.jpg',
            title: 'Mobile Recharge',
            description: 'Mobile Recharge from NetPay to another acount instanly.',
            buttonText: 'Learn More',
            link: '/services/mobile-recharge'
        },

        // Add more card data
    ];

    return (
        <div className="py-8 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
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

export default ServiceCard;