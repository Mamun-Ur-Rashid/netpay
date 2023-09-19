
const FaqItem = ({ question, answer, isOpen, onClick }) => {

    return (
        <div className="text-black ">
            <h3
                className={`text-2xl my-4 cursor-pointer ${isOpen ? ' font-bold' : ''}`}
                onClick={onClick}
            >
                {question}
            </h3>
            <div className="bg-[#06b6d4] h-0.5"></div>
            {isOpen &&
                <p className="p-4 ">
                    {answer}
                </p>}
        </div>
    );
};

export default FaqItem;