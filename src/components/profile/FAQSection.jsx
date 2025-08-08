import { faqData } from "../../data/faqData";
import FAQItem from "../shared/FAQItem";

// eslint-disable-next-line react/prop-types
export default function FAQSection({ className }) {
  return (
    <div className={`mt-6 ${className}`}>
      {faqData.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}
