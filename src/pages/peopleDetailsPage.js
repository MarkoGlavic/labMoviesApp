import React from "react";
import { useParams } from 'react-router-dom';
import PeopleDetails from "../components/peopleDetails/";
import PageTemplate from "../components/templatePeoplePage";
// import useMovie from "../hooks/useMovie";   Redundant
import { getPerson } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const PeopleDetailsPage = (props) => {
  const { id } = useParams();

  const { data: people, error, isLoading, isError } = useQuery(
    ["people", { id: id }],
    getPerson
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


  

  return (
    <>
      {people ? (
        <>
          <PageTemplate people={people}>
            <PeopleDetails people={people} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for peopleperson details</p>
      )}
    </>
  );
};

export default PeopleDetailsPage;