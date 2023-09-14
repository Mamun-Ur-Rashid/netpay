import { Link } from "react-router-dom";
import Button from "../../../shared/button/Button";

const SingleCard = ({ imageUrl, title, description, buttonText, link }) => {
    return (
        <div>
            <div className="text-black p-7 rounded-lg  border border-blue-500 shadow-md">
                <div className="mb-1">
                    <img src={imageUrl} alt={title} className="w-full h-56" />
                </div>
                <h3 className="text-3xl pt-3 text-slate-500 font-semibold ">{title}</h3>
                <p className="py-1 font-semibold text-slate-500 md:py-2">{description}</p>
                <Link to={link}>
                    

                    <button to='/login' className="mt-3 text-lg bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-[6px] px-4 border border-blue-500 hover:border-transparent rounded">Learn More</button>

                </Link>

            </div>
        </div>
    );
};

export default SingleCard;