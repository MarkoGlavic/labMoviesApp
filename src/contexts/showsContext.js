import React, { useState } from "react";

export const ShowsContext = React.createContext(null);

const ShowsContextProvider = (props) => {
  const [favourites, setFavourites] = useState( [] )

  const addToFavourites = (show) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(show.id)) {
      newFavourites.push(show.id);
    }
    setFavourites(newFavourites);  };

  // We will use this function in a later section
  const removeFromFavourites = (show) => {
    setFavourites( favourites.filter(
      (mId) => mId !== show.id
    ) )
  };

  return (
    <ShowsContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
};

export default ShowsContextProvider;