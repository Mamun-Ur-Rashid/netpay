import { Link } from "react-router-dom";
import Button from "../../../shared/button/Button";

const AllServicesHeader = ({ imageUrl, title, text, btnText }) => {
    return (
        <div className="flex flex-col lg:flex-row bg-[#1B2654] p-8 rounded-lg shadow-md">
            <div className="lg:w-1/2 lg:pr-6 mb-4 md:mb-0 text-slate-200">
                <h2 className="text-4xl  font-semibold mb-4 lg:py-8">{title}</h2>
                <p className=" md:text-2xl py-4 lg:py-8">{text}</p>
                <Link to='/login'>
                    <Button text={btnText}></Button>
                </Link>
            </div>
            <div className="lg:w-1/2 pt-4 lg:pl-6">
                <img src={imageUrl} alt={title} className="w-full h-auto" />
            </div>
        </div>
    );
};

export default AllServicesHeader;