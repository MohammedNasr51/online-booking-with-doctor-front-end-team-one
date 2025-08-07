import { useState } from "react";
import CommonSettingsHeader from "../../components/shared/CommonSettingsHeader";
import MenuItem from "../../components/profile/MenuItem";
import WalletItem from "../../components/profile/WalletItem";
import visaIcon from "../../assets/icons/visa-icon.svg";
import mastercardIcon from "../../assets/icons/mastercard-icon.svg";
import applePayIcon from "../../assets/icons/apple-pay-icon.svg";
import paypalIcon from "../../assets/icons/paypal-icon.svg";
import { Link } from "react-router-dom";

const cardMethods = [
  {
    icon: visaIcon,
    title: "Visa",
    path: "method",
  },
  {
    icon: mastercardIcon,
    title: "Mastercard",
    path: "method",
  },
];

export default function PaymentMethods() {
  const [selectedWallet, setSelectedWallet] = useState(null);

  const handleWalletSelect = (walletTitle) => {
    // If the wallet is already selected, deselect it; otherwise, select the new wallet
    setSelectedWallet(selectedWallet === walletTitle ? null : walletTitle);
  };

  return (
    <div className="mx-3 my-5">
      <CommonSettingsHeader title="Payment Methods" />
      <div className="flex flex-col justify-between h-[calc(100dvh-100px)]">
        <div className="mt-6">
          {/* Credit / Debit Cards Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Credit / Debit Card</h3>
            <div className="space-y-2">
              {cardMethods.map((item, index) => (
                <MenuItem key={index} item={item} />
              ))}
            </div>
          </div>

          {/* Mobile Wallets Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Mobile Wallets</h3>
            <div className="space-y-2">
              <WalletItem
                key={"Apple Pay"}
                icon={applePayIcon}
                title="Apple Pay"
                isSelected={selectedWallet === "Apple Pay"}
                onSelect={handleWalletSelect}
              />
              <WalletItem
                key={"PayPal"}
                icon={paypalIcon}
                title="PayPal"
                isSelected={selectedWallet === "PayPal"}
                onSelect={handleWalletSelect}
              />
            </div>
          </div>
        </div>
        {selectedWallet && (
          <Link
            to="/profile"
            className="block text-center bg-[#145DB8] text-white py-2 rounded-lg w-full hover:bg-[#0f4a7c] transition-colors"
          >
            Next
          </Link>
        )}
      </div>
    </div>
  );
}
