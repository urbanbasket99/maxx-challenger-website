import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

function FAQAccordion({ faqs }) {

  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="bg-white rounded-2xl p-8">

      {faqs.map((faq, index) => (

        <div
          key={index}
          className="border-b py-6 cursor-pointer"
          onClick={() =>
            setOpenFAQ(
              openFAQ === index ? null : index
            )
          }
        >

          <div className="flex justify-between items-center">

            <h3 className="font-bold text-xl text-[#123A68]">
              {faq.question}
            </h3>

            {openFAQ === index ? (
              <FiMinus size={24} />
            ) : (
              <FiPlus size={24} />
            )}

          </div>

          {openFAQ === index && (
            <p className="mt-4 text-gray-600 leading-8">
              {faq.answer}
            </p>
          )}

        </div>
      ))}

    </div>
  );
}

export default FAQAccordion;