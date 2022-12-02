import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg'
import Select from "@mui/material/Select";
import sortings from "./sorting";



const formControl = 
  {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)"
  };

  
  export default function SortMoviesCard(props) {



    const handleChange = (e, type, value) => {
      e.preventDefault();
      props.onUserInput(type, value); // NEW
    };
    
    const handleSortingChange = (e) =>
    {
      handleChange(e, "sorting", e.target.value)
    };
  
    
  
  return (
    <Card 
      sx={{
        maxWidth: 345,
        backgroundColor: "rgb(204, 204, 0)"
      }} 
      variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Sort the movies.
        </Typography>
        <FormControl sx={formControl}>
        <InputLabel id="sorting-label">Sorting</InputLabel>

        <Select
        labelId="sorting-label"
              id="sorting-select"
              defaultValue =""
              value={props.sortingFilter}
              onChange={handleSortingChange}
            >
              {sortings.map((sort) => {
                return(
                <MenuItem key={sort.value} value={sort.value}>
                  {sort.label}
                </MenuItem>
                ); }
              )}
              </Select>

</FormControl>
      </CardContent>
      <CardMedia
        sx={{ height: 300 }}
        image={img}
        title="Filter"
      />
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Sort the movies.
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}