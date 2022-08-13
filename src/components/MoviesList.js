import "./MoviesList.css";

const MoviesList = ({ movie }) => {
  return (
    <>
      <div className="box">
        <img src={movie.Poster} alt="movies-poster" />
        <div className="movies-name">
          <h2 style={{ color: "teal" }}>Name: {movie.Title}</h2>
          <p>year: {movie.Year}</p>
        </div>
      </div>
    </>
  );
};

export default MoviesList;
