import React, { useState } from "react";
import Header from "../headerCastList";
import CastList from "../castList";
import Grid from "@mui/material/Grid";

function CastListPageTemplate({ casts, title, action }) {
  const [nameFilter, setNameFilter] = useState("");


  let displayedCasts = casts
    .filter((m) => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
 
  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
      <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
         
         </Grid>
         <CastList action={action} casts={displayedCasts}></CastList>
      </Grid>
    </Grid>
  );
}
export default CastListPageTemplate;