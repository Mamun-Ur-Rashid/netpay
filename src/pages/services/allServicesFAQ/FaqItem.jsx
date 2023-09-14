
const FaqItem = ({ question, answer, isOpen, onClick }) => {

    return (
        <div className=" ">
            <h3
                className={`text-2xl text-white my-4 cursor-pointer ${isOpen ? ' font-bold' : ''}`}
                onClick={onClick}
            >
                {question}
            </h3>
            <div className="bg-[#4e63b8] h-1"></div>
            {isOpen &&
                <p className="text-white text p-4 ">
                    {answer}
                </p>}
        </div>
    );
};

export default FaqItem;