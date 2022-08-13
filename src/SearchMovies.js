import React, { useState } from "react";
import "./SearchMovies.css";

const SearchMovies = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="container-s">
      <form onSubmit={onSubmit}>
        <div className="flex">
          <input
            onChange={(e) => setText(e.target.value)}
            className="input"
            type="text"
            placeholder="Search Movies Term..."
          />
          <button className="btn" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchMovies;
