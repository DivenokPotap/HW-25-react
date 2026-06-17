import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieCredits } from "../../data/tmdb";
import styles from "./MovieCast.module.css"

const CastList = ({ castlist = [] }) => {
    return (
      <ul className={styles.column}>
        {castlist.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <img
             src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200${profile_path}`
                  : "https://dummyimage.com/200x300/cccccc/000000&text=No+Photo"
              }
            />
            <p>{character}</p>
            <p>{name}</p>
          </li>
        ))}
      </ul>
    );
  };

const MovieCast = () => {
    const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  
    useEffect(() => {
      const loadCast = async () => {
        const data = await getMovieCredits(movieId);
        setCast(data.cast);
      };
  
      loadCast();
      }, [movieId])
return(
   <div>
    <CastList castlist={cast}/>
   </div>
)
}

export default MovieCast;