import { Link,  } from "react-router-dom";
import { useState } from "react";
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
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setQuery(e.target.value);
    setMovieitems([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!query) return;

    setIsLoading(true);
    setError(null);

    try {
      const data = await searchMovies(query);
      setMovieitems(data);
    } catch (error) {
      setError("Error fetching movies");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2 className={styles.title}>Найдіть любий фільм!</h2>
      <form onSubmit={handleSubmit}>
        <input className={styles.search}
          placeholder="Введіть назву фільму"
          type="text"
          value={query}
          onChange={handleChange}
        />
        <button className={styles.button} type="submit">Search</button>
      </form>

      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <MovieList movieitems={movieitems} />
    </div>
  );
};

export default Movies;