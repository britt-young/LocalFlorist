import { useState } from "react";

const faqData = [
  {
    title: "Orders",
    questions: [
      {
        q: "How do I place a custom order?",
        a: "You can place a custom order by submitting a request using our order form below.",
      },
      {
        q: "What is the maximum number of flower types I can choose?",
        a: "You can choose up to 5 different types of flowers in a single order.",
      },
      {
        q: "How far in advance do I have to put in an order?",
        a: "We recommend placing your order at least 3 days in advance.",
      },
      {
        q: "What if the flowers I want are out of stock?",
        a: "If a flower type is out of stock, we will contact you with alternative options.",
      },
      {
        q: "What type of payment do you take?",
        a: "We accept credit cards, debit cards, and online payment methods.",
      },
    ],
  },
  {
    title: "Pickup/ Delivery",
    questions: [
      {
        q: "Do you offer same day pickup/ delivery?",
        a: "Yes, same day services are available for our 'same day bouquets'",
      },
      {
        q: "Do you charge a delivery fee?",
        a: "Delivery fees vary based on location and order size.",
      },
      {
        q: "How do my flowers get delivered?",
        a: "Flowers are delivered in climate-controlled vehicles to maintain freshness.",
      },
      {
        q: "Do I need to sign for my delivery?",
        a: "Yes, a signature is typically required upon delivery.",
      },
      {
        q: "Can someone else pickup my order?",
        a: "Yes, just let us know the name of the person picking up.",
      },
    ],
  },
  {
    title: "Events/ Bulk Orders",
    questions: [
      {
        q: "Do you offer wedding services?",
        a: "Yes, we specialize in wedding floral arrangements.",
      },
      {
        q: "How do I request an event order?",
        a: "Submit a request using our custom order form on our website or call us directly.",
      },
      {
        q: "When should I put in my event order request?",
        a: "For events requiring 20+ arrangements, please submit your request at least 3 month before the event date.",
      },
    ],
  },
];

const FAQsStepper = () => {
  const [openIndex, setOpenIndex] = useState({});

  const toggleQuestion = (sectionIdx, questionIdx) => {
    const key = `${sectionIdx}-${questionIdx}`;
    setOpenIndex((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="max-w-7xl mx-auto my-10 p-6 space-y-12">
      {faqData.map((section, sectionIdx) => (
        <div key={section.title}>
          <h5 className="font-semibold text-primary mb-2">{section.title}:</h5>
          <div className="bg-gray-100 shadow-sm divide-y divide-gray-300">
            {section.questions.map((item, questionIdx) => {
              const key = `${sectionIdx}-${questionIdx}`;
              const isOpen = openIndex[key];
              return (
                <div key={key}>
                  <button
                    onClick={() => toggleQuestion(sectionIdx, questionIdx)}
                    className={`w-full text-left px-4 py-3 transition-colors cursor-pointer
    ${isOpen ? "bg-secondary" : "hover:bg-secondary"}`}
                  >
                    {item.q}
                  </button>

                  {isOpen && (
                    <div className="px-4 py-3 text-sm text-gray-700 bg-secondary/30">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQsStepper;
