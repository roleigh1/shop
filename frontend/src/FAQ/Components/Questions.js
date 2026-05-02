import { useState } from "react";

export default function QuestionsAndAnswers({ data }) {
    const [openIndex, setOpenIndex] = useState(null);


    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full mx-auto">
            {data.map((faq, index) => (
                <div key={index} className="border-b border-slate-200">
                    <button
                        onClick={() => toggle(index)}
                        className="w-full flex justify-between items-center py-5 text-slate-800"
                    >
                        <span className="pl-[2rem]">{faq.question}</span>

                        <span
                            className={`transition-transform duration-300 ${openIndex === index ? "rotate-45" : ""
                                }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="w-4 h-4"
                            >
                                <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                            </svg>
                        </span>
                    </button>

                    <div
                        className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40" : "max-h-0"
                            }`}
                    >
                        <div className="pb-5 pl-[2rem] text-sm text-slate-500">
                            {faq.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}