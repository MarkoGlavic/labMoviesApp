import React, { useState} from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StarRate from "@mui/icons-material/StarRate";
import PublicIcon from '@mui/icons-material/Public';
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";



const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };
const PeopleDetails = ({ people }) => {  // Don't miss this!
  const [drawerOpen, setDrawerOpen] = useState(false);


  return (
    <>
      <Typography variant="h5" component="h3">
        Biography
      </Typography>

      <Typography variant="h6" component="p">
        {people.biography}
      </Typography>

      <Paper 
        component="ul" 
        sx={root}
      >
      </Paper>
      <Paper component="ul" sx={root}>
        <Chip icon={<CalendarMonthIcon />} label={`Date of Birth: ${people.birthday}`} />
      
        <Chip icon={<PublicIcon />} label={`Born in: ${people.place_of_birth}`} />
      </Paper>
      <Paper 
        component="ul" 
        sx={root}
      >
  
      </Paper>
        <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
      </Drawer>
    </>
  );
};
export default PeopleDetails ;