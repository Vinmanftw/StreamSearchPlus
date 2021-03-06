import React, { useEffect, useState } from "react";

const FETCH_OPTIONS = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "956f6f9355mshb2c039180194fb0p15f298jsnfaa5a99353d3",
    "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
  },
};

function url({ provider, type, pg, keyword }) {
  const baseURL = `https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=${provider}&type=${type}&page=${pg}&language=en`;
  if (keyword === "") {
    return baseURL;
  }
  return `${baseURL}&keyword=${keyword}`;
}

export function ResultsFetcher({ provider, type, pg, keyword, children }) {
  const [results, setResults] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    fetch(url({ provider, type, pg, keyword }), FETCH_OPTIONS)
      .then((res) => res.json())
      .then((res) => {
        setResults(res.results);
        setTotalPages(res.total_pages);
      });
  }, [provider, type, pg, keyword]);

  return (
    <div className={provider}>
      <React.Fragment> {children({ results, totalPages })}</React.Fragment>
    </div>
  );
}
