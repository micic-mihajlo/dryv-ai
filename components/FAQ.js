"use client";
  
import { useRef, useState } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

const faqList = [
  {
    question: "What is Dryv?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Dryv is an AI-powered time management assistant designed to help you
        optimize your schedule, prioritize tasks, and maximize your
        productivity.
      </div>
    ),
  },
  {
    question: "How does Dryv work?",
    answer: (
      <p>
        Dryv uses advanced algorithms and machine learning to analyze your
        calendar, tasks, and preferences. It then provides personalized
        recommendations and automates scheduling to help you make the most of
        your time.
      </p>
    ),
  },
  {
    question: "What are the benefits of using Dryv?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <ul className="list-disc list-inside">
          <li>Reduced stress and overwhelm</li>
          <li>Increased productivity and efficiency</li>
          <li>Better time management skills</li>
          <li>More time for the things that matter most</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Is Dryv secure?",
    answer: (
      <p>
        Yes, Dryv takes data security seriously. We use industry-standard
        encryption and security protocols to protect your information.
      </p>
    ),
  },
  {
    question: "How much does Dryv cost?",
    answer: (
      <p>
        Dryv offers a variety of pricing plans to fit your needs. See our
        pricing page for more details.
      </p>
    ),
  },
];

const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;