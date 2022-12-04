import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templatePeopleListPage";
import { getPeople } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";
import { Pagination } from "@mui/material";
import Grid from "@mui/material/Grid";




const PeoplePage = (props) => {
  const [page,setPage]=useState(1)
  const {  data, error, isLoading, isError }  = useQuery(['people',page], getPeople)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const peoples = data.results;


  
    return (
    <>
      <PageTemplate
        title="Popular People"
        peoples={peoples}
      action={(people) => {
        return (
        <>
        <AddToPlaylistIcon people={people}/>
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

  export default PeoplePage;

