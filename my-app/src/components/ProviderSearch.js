import React from "react";
import { NavLink } from "react-router-dom";
import { Controls } from "./Controls";
import { ResultCard } from "./ResultCard";
import { ResultsFetcher } from "./ResultsFetcher";

export function ProviderSearch({ label, provider }) {
  return (
    <div>
      <h1>{label}</h1>
      <NavLink to="/">Home</NavLink>

      <Controls>
        {({ page, keyword, type }) => (
          <ResultsFetcher
            provider={provider}
            pg={page}
            type={type}
            keyword={keyword}
          >
            {({ results }) => {
              if (results.length === 0) {
                return <p>No results found</p>;
              }
              return (
                <div className="movie-container">
                  {results.map((result) => {
                    return <ResultCard key={result.id} result={result} />;
                  })}
                </div>
              );
            }}
          </ResultsFetcher>
        )}
      </Controls>
    </div>
  );
}
