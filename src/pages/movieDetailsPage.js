import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
// import useMovie from "../hooks/useMovie";   Redundant
import { getMovie } from '../api/tmdb-api'
import { getMovieCast } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import PageTemplatee from "../components/templateCastPage"


const MovieDetailsPage = (props) => {
  const { id } = useParams();

  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  const { data:cast } = useQuery(
    ["cast", { id: id }],
    getMovieCast
  );

  console.log(cast.cast);
  


  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


  

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
            <PageTemplatee>
      </PageTemplatee>
          </PageTemplate>
         

        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MovieDetailsPage;