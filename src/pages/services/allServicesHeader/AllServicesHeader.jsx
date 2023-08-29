import { Link } from "react-router-dom";
import Button from "../../../shared/button/Button";

const AllServicesHeader = ({ imageUrl, title, text }) => {
    return (
        <div className="flex flex-col md:flex-row bg-[#1B2654] p-8 rounded-lg shadow-md">
            <div className="md:w-1/2 md:pr-6 mb-4 md:mb-0 text-slate-200">
                <h2 className="text-4xl   font-semibold mb-4 md:py-8">{title}</h2>
                <p className=" text-2xl py-4 md:py-8">{text}</p>
                <Link to='/login'>
                    <Button text={'Send Money Now'}></Button>
                </Link>
            </div>
            <div className="md:w-1/2 md:pl-6">
                <img src={imageUrl} alt={title} className="w-full h-auto" />
            </div>
        </div>
    );
};

export default AllServicesHeader;