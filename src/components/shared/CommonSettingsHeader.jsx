import { Link } from "react-router-dom";
import rightArrowIcon from "../../assets/icons/right-arrow-icon.svg";

export default function CommonSettingsHeader({title}) {
  return (
    <div className="flex items-center  mb-4">
      <Link to=".." relative="path" className="block mb-4 ml-2">
        <img src={rightArrowIcon} alt="Right Arrow" className="rotate-180" />
      </Link>
      <h1 className="text-xl mx-auto font-semibold mb-4">{title}</h1>
    </div>
  );
}
