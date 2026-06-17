import { Link,NavLink ,Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../../data/tmdb";
import styles from "./MoviesDetails.module.css"

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const loadMovie = async () => {
      const data = await getMovieDetails(movieId);
      setMovie(data);
    };

    loadMovie();
  }, [movieId]);

  if (!movie){
    return(
        <div>
            <p>Вибачте!</p>
            <h3>Такого фільму немає!</h3>

            <Link to='/movies'>
            Повертайтеся назад
            </Link>
        </div>
    )
  }

return(
   <div className={styles.section}>
    <div className={styles.moviecard}>
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
    <h1>{movie.title}</h1>
    <p>Рік виходу: {movie.release_date?.slice(0, 4)}</p>
    <p>Продовжуваність: {movie.runtime} min</p>
    <p>{movie.overview}</p>
    <p>{movie.genre}</p>
    <p>⭐{movie.vote_average}</p>
    </div>

    <div className={styles.nav}>
        <NavLink  className={({ isActive }) =>
              isActive ? `${styles.Actors} ${styles.ActorsActive}` : ""
            } to={`/movies/${movieId}/cast`}>
         Актори 
        </NavLink>
        <NavLink   className={({ isActive }) =>
              isActive ? `${styles.Reviews} ${styles.ReviewsActive}` : ""
            } to={`/movies/${movieId}/reviews`}>
         Відгуки
        </NavLink>
    </div>
     <div>
        <Outlet/>
     </div>
   </div>
)
}

export default MovieDetails;