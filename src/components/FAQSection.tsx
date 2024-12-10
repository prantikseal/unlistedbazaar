import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MinusIcon, PlusIcon } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const faqQuestions = [
  {
    question: "What is Lorem Ipsum?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "Why do we use it?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    question: "Where does it come from?",
    answer:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    question: "Where can I get some?",
    answer: "There are many variations of passages of Lorem Ipsum available.",
  },
];

const FAQItem = ({ question, answer }: FAQ) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className=" md:w-[800px] text-left font-normal py-2 px-4 transition-colors duration-200 rounded-md flex items-center justify-between flex-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Q.{question}</span>
        <span className="ml-2">{isOpen ? <MinusIcon /> : <PlusIcon />}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="p-4 rounded-b-md ">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface FAQSectionProps {
  faqs?: FAQ[];
}

const FAQSection = ({ faqs = faqQuestions }: FAQSectionProps) => {
  return (
    <div className="p-4 flex flex-wrap justify-between container mx-auto">
      <h2 className="text-4xl md:text-7xl font-bold mb-8 font-mango uppercase pl-4 w-full">
        Frequently Asked <br />
        <span className="font-playfairDisplay lowercase text-3xl md:text-6xl">
          questions
        </span>
      </h2>
      <div className="faqs pr-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
