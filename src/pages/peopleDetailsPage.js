import React from "react";
import { useParams } from 'react-router-dom';
import PeopleDetails from "../components/peopleDetails/";
import PageTemplate from "../components/templatePeoplePage";
import PageTemplatee from "../components/templateActedListPage"
// import useMovie from "../hooks/useMovie";   Redundant
import { getPerson,getMovieByPerson } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

const PeopleDetailsPage = (props) => {
  const { id } = useParams();




  const { data: people, error, isLoading, isError } = useQuery(
    ["people", { id: id }],
    getPerson
  );



  const { data:actorss,err, isLoading: load,errr } = useQuery(
    ["actorss", { id: id }],
    getMovieByPerson
  );

  if (isLoading || load) {
    return <Spinner />;
  }

  if (isError || errr) {
    return <h1>{error.message}</h1>;
  }

  if(actorss&&people!==undefined){

  const actors=actorss.cast.slice(0,5)

  

  return (
    <>
      {people ? (
        <>
          <PageTemplate people={people}>
            <PeopleDetails people={people} />
    
          </PageTemplate>
          <PageTemplatee
      title="Acted in:"
      actors={actors}
      action={(actor) => {
        return <AddToFavouritesIcon actor={actor} />
      }}
    />
        </>
      ) : (
        <p>Waiting for peopleperson details</p>
      )}
    </>
  );
};
}

export default PeopleDetailsPage;