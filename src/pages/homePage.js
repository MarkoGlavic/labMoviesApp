import React, { useState } from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import { Pagination} from "@mui/material";
import Grid from "@mui/material/Grid";

const HomePage = (props) => {

  
  const [page,setPage]=useState(1)
  const {  data, error, isLoading, isError }  = useQuery(['discover',page], getMovies)
  
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favourites = movies.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  const addToFavourites = (movieId) => true 

  


  return (
    <>
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
    />
    <Grid
    container
    justifyContent="center"
    >
      <Pagination count = {10} page={page} onChange={(e,newPageNum) => setPage(newPageNum)} variant ="outlined"></Pagination>
    </Grid>

    </>

);
};

export default HomePage;