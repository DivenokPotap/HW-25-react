import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout"
import Movies from "./components/Movies/Movies"
import MovieDetails from "./components/MovieDetails/MoviesDetails"
import MovieCast from "./components/MovieCast/MovieCast"
import MovieReviews from "./components/MovieReviews/MovieReviews"
import NotFound from "./components/NotFound/NotFound"
import Trending from "./components/Trending/Trending";
import './App.css'

const App = () => {


  return (
    <Routes>
     <Route path="/" element={<Layout/>}>
     <Route index element={<Trending/>}></Route>
     <Route path="movies" element={<Movies/>}></Route>
     <Route path="movies/:movieId" element={<MovieDetails/>}>
     <Route path="cast" element={<MovieCast/>}></Route>
     <Route path="reviews" element={<MovieReviews/>}></Route>
     </Route>

     <Route path="*" element={<NotFound />} />
     </Route>
    </Routes>
  )
}

export default App;
