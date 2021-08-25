import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Controls } from "./Controls";
import Display from "./Display";
import { ResultCard } from "./ResultCard";
import { ResultsFetcher } from "./ResultsFetcher";

function Disney() {
  return (
    <div>
      <h1>Disney+</h1>
      <NavLink to="/">Home</NavLink>

      <Controls>
        {({ page, keyword, type }) => (
          <ResultsFetcher
            provider="disney"
            pg={page}
            type={type}
            keyword={keyword}
          >
            {({ results }) => {
              return (
                <div>
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

export default Disney;
