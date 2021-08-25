import React, { useState } from "react";

export function Controls({ children }) {
  const [type, setType] = useState("movie");
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  function handleType() {
    type === "movie" ? setType("series") : setType("movie");
    setPage(1);
  }

  return (
    <div>
      <div className="Buttons">
        <button id="typebutton" onClick={handleType}>
          {type}
        </button>
        <button id="beginning" onClick={() => setPage(1)}>
          Beginning
        </button>
        <button
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
        <button id="next" onClick={() => setPage(page + 1)}>
          Next
        </button>
        <p>Page: {page}</p>
      </div>
      <div>
        <input
          value={keyword}
          onChange={(e) => {
            const value = e.currentTarget.value;
            console.log(value);
            setKeyword(value);
            setPage(1);
          }}
          placeholder="Search by Name/Keyword"
        />

        {children({ keyword, page, type })}
      </div>
    </div>
  );
}
