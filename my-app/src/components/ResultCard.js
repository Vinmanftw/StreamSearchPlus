import React from "react";

export function ResultCard({ result, provider }) {
  return (
    <div className={`card ${result.streamingInfo.value}`}>
      <a
        href={`https://www.imdb.com/title/${result.imdbID}/`}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="movie-poster"
          src={result.posterURLs["500"]}
          alt={result.title}
        />
      </a>
    </div>
  );
}
