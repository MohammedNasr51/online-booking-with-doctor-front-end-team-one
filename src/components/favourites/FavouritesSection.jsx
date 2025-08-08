import { useState } from "react";
import FavouritesHeader from "./FavouritesHeader";

import { FAVOURITES, HOSPITALS } from "../../data/favouritesData";
import FavouriteItem from "./FavouriteItem";
import FavouritesEmpty from "./FavouritesEmpty";

export default function FavouritesSection() {
  const [activeFavourites, setActiveFavourites] = useState("doctors");
  return (
    <div className="">
      {FAVOURITES.length > 0 || HOSPITALS.length > 0 ? (
        <FavouritesHeader
          activeFavourites={activeFavourites}
          setActiveFavourites={setActiveFavourites}
        />
      ) : null}
      {activeFavourites === "doctors" && (
        <>
          {FAVOURITES.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-4 auto-rows-min justify-items-start overflow-y-auto h-[73dvh]">
              {FAVOURITES.map((item) => (
                <FavouriteItem key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="h-[73dvh]">
              <FavouritesEmpty />
            </div>
          )}
        </>
      )}
      {activeFavourites === "hospitals" && (
        <>
          {HOSPITALS.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-4 auto-rows-min justify-items-start overflow-y-auto h-[73dvh]">
              {HOSPITALS.map((item) => (
                <FavouriteItem key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="h-[73dvh]">
              <FavouritesEmpty />
            </div>
          )}
        </>
      )}
    </div>
  );
}
