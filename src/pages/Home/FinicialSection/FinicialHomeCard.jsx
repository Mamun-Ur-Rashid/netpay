import SingleCard from "../../services/serviceCard/SingleCard";

const FinicialHomeCard = () => {

    const cardData = [
        {
            imageUrl: 'https://img.freepik.com/free-vector/people-using-mobile-bank-remittance-money_74855-6617.jpg?w=2000',
            // imageUrl: 'https://media.istockphoto.com/id/1030875166/photo/sending-money.jpg?s=612x612&w=0&k=20&c=mO8gHQbiLymy0mxdhFbRjHKAUQqPrEBg4NH9bfsbX-g=',
            title: 'Send Money',
            description: 'Send money from NetPay to another acount instanly.',
            buttonText: 'Learn More',
            link: '/services/send-money',
        },
        {
            // imageUrl: 'https://www.studytienganh.vn/upload/2021/05/101183.png',
            imageUrl: 'https://img.freepik.com/premium-vector/3d-cartoon-smartphone-with-credit-card-money-online-payment-concept-mobile-wallet-application-banking-app-transfer-money-via-smartphone-vector-3d-illustration_221648-593.jpg',
            title: 'Cash Out',
            description: 'Cash Out from NetPay to Your acount instanly.',
            buttonText: 'Learn More',
            link: '/services/cash-out'
        },
        {
            // imageUrl: 'https://media.istockphoto.com/id/591840372/photo/hand-coins-and-the-icon-with-the-plus-sign.jpg?s=612x612&w=0&k=20&c=d6ZTx7miQyWo7YP_RPEStOLBesXdvXe53PJJGkQQBQQ=',
            imageUrl: 'https://img.freepik.com/free-vector/transfer-money-concept-illustration_114360-3762.jpg?w=2000',
            title: 'Add Money',
            description: 'Add money from NetPay to another acount instanly.',
            buttonText: 'Learn More',
            link: '/services/add-money'
        },

        // Add more card data
    ];

    return (
        <div className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20">
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