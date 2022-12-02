import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";
import SortMoviesCard from "../sortMoviesCard";

function MovieListPageTemplate({ movies, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [ratingFilter, setRatingFilter] = useState("")
  const [sortingFilter, setSortingFilter] = useState("");
  const genreId = Number(genreFilter);
  const rating = Number(ratingFilter)
  const sorting = Number(sortingFilter)

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    })
      .filter((m) => {
        return rating > 0 ? m.vote_average>=rating : true;
      })
      .filter(() => {
        return sorting===1 ? movies.sort(compareTitle) : sorting === 2 ? movies.sort(compareRating) : true;
      })
    ;

    function compareTitle( a, b ) {
      if ( a.title < b.title ){
        return -1;
      }
      if ( a.title > b.title ){
        return 1;
      }
      return 0;
    }

    function compareRating(a,b){
      return parseFloat(b.vote_average) - parseFloat(a.vote_average)
    }

   


  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else if (type === "rating") setRatingFilter(value);
    else if (type === "sorting") setSortingFilter(value)
    else setGenreFilter(value);
  };

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
            ratingFilter={ratingFilter}
          />
         
        </Grid>`
        <Grid key="sort" item xs={12} sm={6} md={4} lg={3} xl={2}>
        <SortMoviesCard
                    onUserInput={handleChange}
                    sortingFilter={sortingFilter}
                  
/>


</Grid>
        <MovieList action={action} movies={displayedMovies}></MovieList>
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;