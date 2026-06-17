import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieReviews } from "../../data/tmdb";
const ReviewList = ({ reviewlist = [] }) => {
    return (
      <ul>
        {reviewlist.map(({ id, author, content, created_at }) => (
          <li key={id}>
            <h3>{author}</h3>
            <p>{created_at}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    );
  };

const MovieReviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    
      useEffect(() => {
        const loadCast = async () => {
          const data = await getMovieReviews(movieId);
          setReviews(data);
        };
    
        loadCast();
        }, [movieId])
return(
   <div>
    <ReviewList reviewlist={reviews}/>
   </div>
)
}

export default MovieReviews;