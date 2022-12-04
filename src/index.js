import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; 
import ShowPage from "./pages/showPage";
import ShowPagee from "./pages/showDetailsPage"
import PeoplePagee from "./pages/peopleDetailsPage";
import {Link} from 'react-router-dom'
import PeoplePage from "./pages/peoplePage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingPage from "./pages/upcomingPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import ShowsContextProvider from "./contexts/showsContext";
import FavouriteShowsPage from "./pages/favouriteShowsPage";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import LoginPage from "./components/authentication/loginPage";
import AuthContextProvider from "./components/authentication/authContext";
import { AuthenticationProvider } from "./components/authentication/authenticationContext";
import ProtectedRoute from "./components/authentication/protectedRoute";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});


    const App = () => {
      return (
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
              <SiteHeader />     
              <MoviesContextProvider>
                <ShowsContextProvider>
                 <AuthContextProvider>
                  <AuthenticationProvider>
                

              <Routes>
                <Route path = "/login" element = {<LoginPage/>}/>
              <Route path="/reviews/form" element={<AddMovieReviewPage/>} />

              <Route path="/movies/upcoming" element={
                              <ProtectedRoute>
                                 < UpcomingPage/>
              </ProtectedRoute>
              }
              />
              <Route path="/shows" element={ < ShowPage/> } />
              <Route path ="/shows/:id" element={<ShowPagee/>}/>
              <Route path ="/people/" element={<PeoplePage/>}/>
              <Route path ="/people/:id" element={<PeoplePagee/>}/>
        <Route path="/movies/:id" element={<MoviePage />} />
      <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route exact path = "shows/favourites" element = {<ProtectedRoute><FavouriteShowsPage/>
        </ProtectedRoute>}/>
        <Route exact path="/movies/favourites" element={
        <ProtectedRoute><FavouriteMoviesPage /></ProtectedRoute>} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
      </AuthenticationProvider>
      </AuthContextProvider>
      </ShowsContextProvider>
      </MoviesContextProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App /> );