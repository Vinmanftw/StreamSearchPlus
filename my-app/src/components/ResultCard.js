import React from "react";

export function ResultCard({ result }) {
  return (
    <div id="movieDiv">
      <div className="card">
        <h4>{result.title}</h4>
        <img
          className="movie-poster"
          src={result.posterURLs["500"]}
          alt={result.title}
        />
        <a
          href={`https://www.imdb.com/title/${result.imdbID}/`}
          target="_blank"
          rel="noreferrer"
        ></a>
      </div>
    </div>
  );
}
