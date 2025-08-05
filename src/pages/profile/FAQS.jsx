import CommonSettingsHeader from "../../components/shared/CommonSettingsHeader";
import FAQItem from "../../components/shared/FAQItem";
import { faqData } from "../../data/faqData";

export default function FAQS() {
  return (
    <div className="mx-3 my-5">
      <CommonSettingsHeader title="FAQs" />
      <div className="mt-6">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}
