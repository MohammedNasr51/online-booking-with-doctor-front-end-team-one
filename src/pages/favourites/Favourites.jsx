import FavouritesSection from "../../components/favourites/FavouritesSection";
import CommonSettingsHeader from "../../components/shared/CommonSettingsHeader";

export default function Favourites() {
  return (
    <div className="mx-3 my-5">
      <CommonSettingsHeader title="Favourites" />
      <FavouritesSection />
    </div>
  );
}
