import { Link, useSearchParams  } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { searchMovies } from "../../data/tmdb";
import styles from "./Movies.module.css"

const MovieList = ({ movieitems = [] }) => {
  return (
    <ul>
      {movieitems.map(({ id, poster_path, title }) => (
        <li key={id}>
         <Link to={`/movies/${id}`}>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : "https://dummyimage.com/200x300/cccccc/000000&text=No+Photo"
            }
          />
          <p>{title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Movies = () => {
  const [movieitems, setMovieitems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams(); 
  const query = searchParams.get("q") ?? "";
  const [inputValue, setInputValue] = useState(query);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      if(inputValue){
        params.set("q", inputValue)
      } else {
        params.delete("q")
      }

      return params;
    })
  };

  const controllerRef = useRef();
useEffect(() => {
    if (!query) {
      setMovieitems([])
      return;
    } 

    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    controllerRef.current = new AbortController();
  const fetchMovies = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await searchMovies(query , controllerRef.current.signal);
      setMovieitems(data);
    } catch (error) {
      if (error.name === "CanceledError") {
        return;
      }
      setError("Error fetching movies");
    } finally {
        setIsLoading(false);
    }
  }
  
  fetchMovies()

  }, [query] );

  return (
    <div>
      <h2 className={styles.title}>Найдіть любий фільм!</h2>
        <input className={styles.search} 
          placeholder="Введіть назву фільму"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className={styles.button} onClick={handleSearch}>Search</button>

        { !isLoading && movieitems.length === 0 && query && <h2 className={styles.notFound}>Немає фільмів по вашому запиту</h2>}

      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <MovieList movieitems={movieitems} />
    </div>
  );
};

export default Movies;