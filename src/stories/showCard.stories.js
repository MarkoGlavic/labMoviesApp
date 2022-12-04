import React from "react";
import ShowCard from "../components/showCard";
import SampleShow from "./showData";
import { MemoryRouter } from "react-router";
import ShowsContextProvider from "../contexts/showsContext";
import { action } from "@storybook/addon-actions";
import AddToFavouritesIcon from "../components/cardIcons/addToFavouritesShow";
import { AuthenticationProvider } from "../components/authentication/authenticationContext";

export default {
  title: "Home Page/ShowCard",
  component: ShowCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <AuthenticationProvider>{Story()}</AuthenticationProvider>,
    (Story) => <ShowsContextProvider>{Story()}</ShowsContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <ShowCard
      show={SampleShow}
      action={(show) => <AddToFavouritesIcon show={show} />}
      taging={(show) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleShow, poster_path: undefined };
  return (
    <ShowCard
      show={sampleNoPoster}
      action={(show) => <AddToFavouritesIcon show={show} />}
      taging={(show) => null}
    />
  );
};
Exceptional.storyName = "exception";
