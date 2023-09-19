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
            <div className="p-4 md:p-14 bg-[#e2e8f0] rounded-lg shadow-gray-600 shadow-xl text-black">
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