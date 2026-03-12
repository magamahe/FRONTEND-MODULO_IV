import style from "./Movie.module.css";

const Movie = ({ movie }) => {
  const { name, image, year, rating } = movie;
  return (
    <article className={style.containerMovie}>
      <div className={style.overlay}></div>
      <img className={style.movieImage} src={image} alt={name} />
      <h3 className={style.title}>{name}</h3>
      <p className={style.year}>{year}</p>
      <p className={style.rating}>
        {"⭐".repeat(Math.round(rating))}
        {` (${rating}/10)`}
      </p>
    </article>
  );
};

export default Movie;
