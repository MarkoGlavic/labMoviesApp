import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
// import useMovie from "../hooks/useMovie";   Redundant
import { getMovie } from '../api/tmdb-api'
import { getMovieCast } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import PageTemplatee from "../components/templateCastListPage"
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";


const MovieDetailsPage = (props) => {
  const { id } = useParams();

  const { data:cast,err,load,errr } = useQuery(
    ["cast", { id: id }],
    getMovieCast
  );

  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );



 


  if (isLoading || load) {
    return <Spinner />;
  }


  if (isError || errr) {
    return <h1>{error.message}</h1>;
  }


  const casts = cast.cast;
console.log(casts.cast)

  

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
            <PageTemplatee
        title="Cast of Movie"
        casts={casts}
      action={(cast) => {
        return (
        <>
        <AddToPlaylistIcon cast={cast}/>
     </>
        );
      }}
      />
            
          </PageTemplate>
         
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MovieDetailsPage;