import "./App.css";
import MoviesList from "./components/MoviesList";

import React, { useEffect, useState } from "react";
import SearchMovies from "./SearchMovies";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("thor");

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=df955833`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  });

  return (
    <>
      <SearchMovies searchText={(Text) => setSearchValue(Text)} />

      {!isLoading && movies.length === 0 && (
        <h1
          style={{
            color: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "3rem",
          }}
        >
          No Movies Found...
        </h1>
      )}

      {isLoading ? (
        <h1
          style={{
            color: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "3rem",
          }}
        >
          Loading...
        </h1>
      ) : (
        <div className="container">
          {movies.map((movie) => (
            <MoviesList movie={movie} />
          ))}
        </div>
      )}
    </>
  );
}

export default App;
