
const FaqItem = ({ question, answer, isOpen, onClick }) => {

    return (
        <div className=" text-black">
            <h3
                className={`text-2xl my-4 cursor-pointer ${isOpen ? ' font-bold' : ''}`}
                onClick={onClick}
            >
                {question}
            </h3>
            <div className="bg-gray-400 h-1"></div>
            {isOpen &&
                <p className="bg-gray-50 p-4 ">
                    {answer}
                </p>}
        </div>
    );
};

export default FaqItem;