import CommonSettingsHeader from "../../components/shared/CommonSettingsHeader";

export default function Privacy() {
  return (
    <div className="mx-3 my-5">
      <CommonSettingsHeader title={"Privacy Policy"} />
      <div>
        <div className="flex items-center">
          <h1 className="mr-[3px]">Last Updated: </h1>
          <p className="text-sm text-[#6D7379]"> 19/11/2024</p>
        </div>
        <p className="text-sm text-[#6D7379] mt-2">
          Welcome to Cure. Your privacy is important to us. This Privacy Policy
          explains how we collect, use, and protect your personal information
          when you use our doctor appointment booking app.
        </p>
        <div>
          <h1>Terms & Conditions</h1>
          <p className="text-sm text-[#6D7379] mt-2">
            By registering, accessing, or using this app, you confirm that you
            are at least 18 years old (or have parental/guardian consent if
            younger) and agree to be bound by these Terms and our Privacy
            Policy.
          </p>
          <p className="text-sm text-[#6D7379] ">You agree to:</p>
          <ul className="text-[#6D7379] list-outside list-disc ml-5">
            <li>Use the app only for lawful purposes.</li>
            <li>
              Provide accurate and complete information during registration and
              booking.
            </li>
            <li>Not impersonate others or create fake accounts.</li>
          </ul>
          <p className="text-sm text-[#6D7379] mt-2">You may not:</p>
          <ul className="text-[#6D7379] list-outside list-disc ml-5 ">
            <li>Disrupt or interfere with the app’s functionality.</li>
            <li>Try to access data or systems not meant for you.</li>
            <li> Use the app to harass or abuse doctors or staff.</li>
          </ul>
          <p className="text-sm text-[#6D7379] mt-2">
            Your data is handled in accordance with our [Privacy Policy]. You
            are responsible for keeping your login credentials secure.
          </p>
          <ul></ul>
        </div>
      </div>
    </div>
  );
}
