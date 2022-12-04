import React from "react";
import PeopleDetails from "../components/peopleDetails";
import SampleActor from "./actorData";
import { MemoryRouter } from "react-router";

export default {
  title: "Person Details Page/PersonDetails",
  component: PeopleDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <PeopleDetails people={SampleActor} />;

Basic.storyName = "Default";
