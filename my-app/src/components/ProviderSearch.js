import React, { useState } from "react";
import { Controls } from "./Controls";
import { ResultCard } from "./ResultCard";
import { ResultsFetcher } from "./ResultsFetcher";

export function ProviderSearch({ label, provider, buttonColor, btnText }) {
  const [type, setType] = useState("movie");
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  function handleType() {
    type === "movie" ? setType("series") : setType("movie");
    setPage(1);
  }

  return (
    <div className="label">
      <h1>{label}</h1>

      <ResultsFetcher
        provider={provider}
        pg={page}
        type={type}
        keyword={keyword}
      >
        {({ results, totalPages }) => {
          return (
            <Controls
              buttonColor={buttonColor}
              btnText={btnText}
              totalPages={totalPages}
              type={type}
              page={page}
              keyword={keyword}
              handleType={handleType}
              setPage={setPage}
              setKeyword={setKeyword}
            >
              <div className="movie-container">
                {results.length === 0 && <p>No results found</p>}
                {results.map((result) => {
                  return <ResultCard key={result.id} result={result} />;
                })}
              </div>
            </Controls>
          );
        }}
      </ResultsFetcher>
    </div>
  );
}
