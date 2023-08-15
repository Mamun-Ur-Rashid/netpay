
const SingleCard = ({ imageUrl, title, description, buttonText }) => {
    return (
        <div>
            <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="mb-3">
                    <img src={imageUrl} alt={title} className="w-full h-auto" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 py-4 mb-4">{description}</p>
                <button className="bg-blue-500 text-white py-2 px-4 mx-auto rounded-full w-1/2">
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default SingleCard;