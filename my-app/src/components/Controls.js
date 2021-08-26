import React, { useState } from "react";

export function Controls({ children , buttonColor, btnText}) {
  const [type, setType] = useState("movie");
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  function handleType() {
    type === "movie" ? setType("series") : setType("movie");
    setPage(1);
  }

  return (
    <React.Fragment>
      <div className="Buttons">
        <button style={{backgroundColor: buttonColor, color: btnText}} onClick={handleType}>
          {type}
        </button>
        <button style={{backgroundColor: buttonColor, color: btnText}} id="start" onClick={() => setPage(1)}>
          Start
        </button>
        <button
          style={{backgroundColor: buttonColor, color: btnText}} 
          id="back"
          onClick={() => {
            if (page === 1) {
              return;
            }
            setPage(page - 1);
          }}
        >
          Back
        </button>
        <button style={{backgroundColor: buttonColor, color: btnText}}  id="next" onClick={() => setPage(page + 1)}>
          Next
        </button>
        <p>Page: {page}</p>
      </div>
      <div>
        <input
          id="input"
          value={keyword}
          onChange={(e) => {
            const value = e.currentTarget.value;
            console.log(value);
            setKeyword(value);
            setPage(1);
          }}
          placeholder="Search by Name/Keyword"
        />
      </div>
      {children({ keyword, page, type })}
    </React.Fragment>
  );
}
