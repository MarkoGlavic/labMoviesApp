import React from "react";
import PeopleList from "../components/peopleList";
import SampleActor from "./actorData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import Grid from "@mui/material/Grid";
export default {
  title: "Home Page/ActorList",
  component: PeopleList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,

  ],
};

export const Basic = () => {
  const peoples = [
    { ...SampleActor, id: 1 },
    { ...SampleActor, id: 2 },
    { ...SampleActor, id: 3 },
    { ...SampleActor, id: 4 },
    { ...SampleActor, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <PeopleList
        peoples={peoples}
action={action}      />
    </Grid>
  );
};
Basic.storyName = "Default";
