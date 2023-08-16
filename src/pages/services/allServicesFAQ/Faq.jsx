import { useState } from "react";
import FaqItem from "./FaqItem";

const Faq = ({ faqData }) => {

    const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

    const handleQuestionClick = (index) => {
        if (openQuestionIndex === index) {
            setOpenQuestionIndex(null);
        } else {
            setOpenQuestionIndex(index);
        }
    };

    return (
        <div className="py-8">
            <h1 className="text-2xl md:text-4xl text-black text-center font-semibold mb-4">Frequently Asked Questions</h1>
            <div className="py-6">
                {faqData.map((item, index) => (
                    <FaqItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isOpen={openQuestionIndex === index}
                        onClick={() => handleQuestionClick(index)}
                    ></FaqItem>
                ))}
            </div>
        </div>
    );
};

export default Faq;