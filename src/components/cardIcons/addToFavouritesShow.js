import React, { useContext } from "react";
import { ShowsContext } from "../../contexts/showsContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAuthentication } from "../authentication/authenticationContext";

const AddToFavouritesIconShow = ({ show }) => {
  const context = useContext(ShowsContext);
  const { currentUser } = useAuthentication();

  const handleAddToFavourites = (e) => {
    e.preventDefault();
    context.addToFavourites(show);
  };

  function myFunction() {
    alert("Log in to be able to favourite shows!");
  }

  return (
    <>
    {currentUser ? (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavourites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton> ) : (<IconButton aria-label="add to favorites" onClick={myFunction}>
    <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>)}
 </> );
};

export default AddToFavouritesIconShow;