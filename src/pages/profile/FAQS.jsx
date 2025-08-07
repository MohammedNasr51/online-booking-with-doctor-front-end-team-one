import FAQSection from "../../components/profile/FAQSection";
import CommonSettingsHeader from "../../components/shared/CommonSettingsHeader";

export default function FAQS() {
  return (
    <div className="mx-3 my-5">
      <CommonSettingsHeader title="FAQs" />
      <FAQSection />
    </div>
  );
}
