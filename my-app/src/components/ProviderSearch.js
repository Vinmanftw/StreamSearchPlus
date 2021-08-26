import React from "react";
import { Controls } from "./Controls";
import { ResultCard } from "./ResultCard";
import { ResultsFetcher } from "./ResultsFetcher";

export function ProviderSearch({ label, provider, buttonColor, btnText}) {
  return (
    <div className="label">
      <h1>{label}</h1>
      

      <Controls buttonColor={buttonColor} btnText={btnText}>
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
