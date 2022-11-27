import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templatePeopleListPage";
import { getPeople } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";


const PeoplePage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('people', getPeople)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const peoples = data.results;


  
    return (
      <PageTemplate
        title="Popular People"
        peoples={peoples}
      action={(people) => {
        return (
        <>
        <AddToPlaylistIcon poeple={people}/>
     </>
        );
      }}
      />
    );
  };

  export default PeoplePage;

