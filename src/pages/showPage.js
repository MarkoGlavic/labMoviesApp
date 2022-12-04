import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateShowListPage";
import { getShows } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { Pagination } from "@mui/material";
import Grid from "@mui/material/Grid";
import AddToFavouritesIconShow from "../components/cardIcons/addToFavouritesShow";


const ShowPage = (props) => {
  const [page,setPage]=useState(1)
  const {  data, error, isLoading, isError }  = useQuery(['discover-shows',page], getShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const shows = data.results;


  
    return (
      <>
      <PageTemplate
        title="Upcoming Shows"
        shows={shows}
      action={(show) => {
        return (
        <>
      <AddToFavouritesIconShow show={show} />
     </>
        );
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

  export default ShowPage;

