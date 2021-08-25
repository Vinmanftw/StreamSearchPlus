import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Display from "./Display";
import { ResultCard } from "./ResultCard";
import { ResultsFetcher } from "./ResultsFetcher";

function Disney() {
  const [curType, setCurType] = useState("Movies");
  function handleType() {
    curType === "Movies" ? setCurType("Series") : setCurType("Movies");
  }
  return (
    <div>
      <h1>Disney+</h1>
      <NavLink to="/">Home</NavLink>
      <div className="types">
        <button id="typebutton" onClick={handleType}>
          {curType}
        </button>
      </div>
      {/* <Display curProvider={"disney"} type={curType} /> */}
      <ResultsFetcher provider="disney" pg={1} type="movie" keyword={""}>
        {({ results }) => {
          return (
            <div>
              {results.map((result) => {
                return <ResultCard result={result} />;
              })}
            </div>
          );
        }}
      </ResultsFetcher>
    </div>
  );
}

export default Disney;
