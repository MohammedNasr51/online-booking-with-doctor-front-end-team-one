import { Link } from "react-router-dom";
import CommonSettingsHeader from "../../components/shared/CommonSettingsHeader";
import PasswordInput from "../../components/shared/PasswordInput";

export default function PasswordManagement() {
  const passwordFields = [
    { title: "Current Password" },
    { title: "New Password" },
    { title: "Confirm New Password" },
  ];

  return (
    <div className="mx-3 my-5 flex flex-col">
      <CommonSettingsHeader title="Password Management" />
      <form>
        <div className="mt-6 flex flex-col gap-4">
          {passwordFields.map((field, index) => (
            <PasswordInput
              key={index}
              title={field.title}
              defaultValue="password"
            />
          ))}
        </div>
        <Link
          to="/profile"
          className="block text-center mt-12 bg-[#145DB8] text-white py-2 rounded-lg w-full hover:bg-[#0f4a7c] transition-colors"
        >
          Change password
        </Link>
      </form>
    </div>
  );
}
