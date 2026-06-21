import { Route, Routes } from "react-router-dom";
import { lazy } from 'react';
import Layout from "./components/Layout/Layout"
// import Movies from "./components/Movies/Movies"
// import MovieDetails from "./components/MovieDetails/MoviesDetails"
// import MovieCast from "./components/MovieCast/MovieCast"
// import MovieReviews from "./components/MovieReviews/MovieReviews"
// import NotFound from "./components/NotFound/NotFound"
// import Trending from "./components/Trending/Trending";

const Movies = lazy(() => import("./components/Movies/Movies"))
const MovieDetails = lazy(() => import("./components/MovieDetails/MoviesDetails"))
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"))
const MovieReviews = lazy(() => import("./components/MovieReviews/MovieReviews"))
const NotFound = lazy(() => import("./components/NotFound/NotFound"))
const Trending = lazy(() => import("./components/Trending/Trending"))

import './App.css'
import React from "react";

const App = () => {


  return (
    <Routes>
     <Route path="/" element={<Layout/>}>
     <Route index element={<Trending/>}/>
     <Route path="movies" element={<Movies/>}/>

     <Route path="movies/:movieId" element={<MovieDetails/>}>
     <Route path="cast" element={<MovieCast/>}/>
     <Route path="reviews" element={<MovieReviews/>}/>
     
     </Route>
     </Route>


     <Route path="*" element={<NotFound />} />
    </Routes>

    
  )
}

export default App;
