
const AllServicesHeader = ({ imageUrl, title, text }) => {
    return (
        <div className="flex flex-col md:flex-row bg-white p-8 rounded-lg shadow-md">
            <div className="md:w-1/2 md:pr-6 mb-4 md:mb-0">
                <h2 className="text-4xl  text-black font-semibold mb-4 md:py-8">{title}</h2>
                <p className="text-gray-600 text-2xl py-4 md:py-8">{text}</p>
            </div>
            <div className="md:w-1/2 md:pl-6">
                <img src={imageUrl} alt={title} className="w-full h-auto" />
            </div>
        </div>
    );
};

export default AllServicesHeader;