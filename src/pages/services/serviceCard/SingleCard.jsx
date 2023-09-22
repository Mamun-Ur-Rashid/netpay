import { Link } from "react-router-dom";
import Button from "../../../shared/button/Button";

const SingleCard = ({ imageUrl, title, description, buttonText, link }) => {
    return (
        <div>
            <div className="text-black p-7 rounded-lg shadow-gray-200 shadow-xl hover:shadow-2xl">
                <div className="mb-1">
                    <img src={imageUrl} alt={title} className="w-full h-56" />
                </div>
                <h3 className="text-3xl pt-3 text-black font-semibold ">{title}</h3>
                <p className="py-1 font-semibold text-slate-500 md:py-2">{description}</p>
                <Link to={link}>
                    <Button text={'learn more'}></Button>
                </Link>

            </div>
        </div>
    );
};

export default SingleCard;