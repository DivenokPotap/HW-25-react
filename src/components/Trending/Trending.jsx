import { Link} from "react-router-dom";
import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../data/tmdb";
import styles from "./Trending.module.css"
 const Trending = () => {
   const [movies,setMovies] = useState([])

    useEffect(() => {
        const load = async () => {
          const data = await getTrendingMovies();
          setMovies(data);
          console.log(movies)
        };
    
        load();
      }, []);
    
return(
   <div className={styles.column}>
        {movies.map((movie) => (
            <div key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}/>
                
            <p>{movie.title}</p>
            </Link>
            </div>
          ))}
        </div>
)
}

export default Trending;