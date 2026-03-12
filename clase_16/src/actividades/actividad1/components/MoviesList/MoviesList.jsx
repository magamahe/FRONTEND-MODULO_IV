import style from "./MoviesList.module.css";

import moviesList from "../../db/movies";
import Movie from "../Movie/Movie";

const MoviesList = () => {
  return (
    <div className={style.containerMovies}>
      {moviesList.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;
