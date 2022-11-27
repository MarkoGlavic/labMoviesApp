import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateShowListPage";
import { getShows } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";


const ShowPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('discover-shows', getShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const shows = data.results;


  
    return (
      <PageTemplate
        title="Upcoming Shows"
        shows={shows}
      action={(show) => {
        return (
        <>
        <AddToPlaylistIcon show={show}/>
     </>
        );
      }}
      />
    );
  };

  export default ShowPage;

