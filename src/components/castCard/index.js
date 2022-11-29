import React, { useContext  } from "react";
import Avatar from '@mui/material/Avatar';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { Link } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'

export default function CastCard({ cast, action }) { // const { favourites, addToFavourites } = useContext(MoviesContext);


 
//    if (favourites.find((id) => id === movie.id)) {
//      movie.favourite = true;
//    } else {
//      movie.favourite = false
//    }
 
//    const handleAddToFavourite = (e) => {
//      e.preventDefault();
//      addToFavourites(movie);
//    };
 
return (
  <Card sx={{ maxWidth: 345 }}>
  <CardHeader
      avatar={
        cast.favourite ? (
          <Avatar sx={{ backgroundColor: 'red' }}>
            <FavoriteIcon />
          </Avatar>
        ) : null
      }
      title={
        <Typography variant="h5" component="p">
          {cast.name}{" "}
        </Typography>
      }
    />
    <CardMedia
      sx={{ height: 500 }}
      image={
        cast.profile_path
          ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
          : img
      }
    />
    <CardContent>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h6" component="p">
            <CalendarIcon fontSize="small" />
            {cast.known_for_department}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" component="p">
            <StarRateIcon fontSize="small" />
            {"  "} {cast.popularity}{" "}
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
    <CardActions disableSpacing>
  {action(cast)}
  <Link to={`/people/${cast.id}`}>
    <Button variant="outlined" size="medium" color="primary">
      More Info ...
    </Button>
  </Link>
</CardActions>
  </Card>
);
}