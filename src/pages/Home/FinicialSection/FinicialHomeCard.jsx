import SingleCard from "../../services/serviceCard/SingleCard";

const FinicialHomeCard = () => {

    const cardData = [
        {
            imageUrl: 'https://media.istockphoto.com/id/1030875166/photo/sending-money.jpg?s=612x612&w=0&k=20&c=mO8gHQbiLymy0mxdhFbRjHKAUQqPrEBg4NH9bfsbX-g=',
            title: 'Send Money',
            description: 'Send money from NetPay to another acount instanly.',
            buttonText: 'Learn More',
            link: '/services/send-money',
        },
        {
            imageUrl: 'https://www.studytienganh.vn/upload/2021/05/101183.png',
            title: 'Cash Out',
            description: 'Cash Out from NetPay to Your acount instanly.',
            buttonText: 'Learn More',
            link: '/services/cash-out'
        },
        {
            imageUrl: 'https://media.istockphoto.com/id/1030875166/photo/sending-money.jpg?s=612x612&w=0&k=20&c=mO8gHQbiLymy0mxdhFbRjHKAUQqPrEBg4NH9bfsbX-g=',
            title: 'Add Money',
            description: 'Add money from NetPay to another acount instanly.',
            buttonText: 'Learn More',
            link: '/services/add-money'
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

export default FinicialHomeCard;