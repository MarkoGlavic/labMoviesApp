import React, { useState } from "react";
import Header from "../headerMovieList";
import PeopleList from "../peopleList";
import Grid from "@mui/material/Grid";
import FilterPeopleCard from "../filterPeopleCard";
import Dropdown from 'react-bootstrap/Dropdown';

function PeopleListPageTemplate({ peoples, title, action }) {


  
  const [nameFilter, setNameFilter] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState(0)
 const departmentFilterId = Number(departmentFilter)



 


  let displayedPeoples = peoples
    .filter((m) => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m)=> {
      return departmentFilterId>0 ? m.known_for_department === departmentFilter : true;

    })
 
    const handleChange = (type,value) => {
      if (type === "name") setNameFilter(value);
      else setDepartmentFilter(type.target.value);
    }


  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
        <FilterPeopleCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            
          />
        </Grid>
        <PeopleList action={action} peoples={displayedPeoples}></PeopleList>
      </Grid>
    </Grid>
  );
}
export default PeopleListPageTemplate;