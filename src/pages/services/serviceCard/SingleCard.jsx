import { Link } from "react-router-dom";

const SingleCard = ({ imageUrl, title, description, buttonText, link }) => {
    return (
        <div>
            <div className="bg-[#1B2654] p-4 rounded-lg shadow-md">
                <div className="mb-1">
                    <img src={imageUrl} alt={title} className="w-full h-56" />
                </div>
                <h3 className="text-3xl text-white font-semibold mb-">{title}</h3>
                <p className="text-white py-1 md:py-2 mb-4">{description}</p>
                <Link to={link}>
                    <button className="bg-blue-500 text-white py-1 md:py-2 px-4 mx-auto rounded-full w-1/2">
                        {buttonText}
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default SingleCard;