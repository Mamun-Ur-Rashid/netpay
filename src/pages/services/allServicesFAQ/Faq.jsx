import { useState } from "react";
import FaqItem from "./FaqItem";
import Title from "../../../shared/title/Title";

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
            <Title title={'Frequently Asked Questions'}></Title>
            <div className="p-4 md:p-14 bg-gray-100 rounded-lg shadow-gray-200 shadow-lg text-black">
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