import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAuthentication } from "../authentication/authenticationContext";

const AddToFavouritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);
  const { currentUser } = useAuthentication();

  const handleAddToFavourites = (e) => {
    e.preventDefault();
    context.addToFavourites(movie);
  };

  function myFunction() {
    alert("Log in to be able to favourite movies!");
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

export default AddToFavouritesIcon;