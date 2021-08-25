import React, { useEffect, useState } from "react";

const FETCH_OPTIONS = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "956f6f9355mshb2c039180194fb0p15f298jsnfaa5a99353d3",
    "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
  },
};

function url({ provider, type, pg, keyword }) {
  const baseURL = `https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=${provider}&type=${type}&genre=18&page=${pg}&language=en`;
  if (keyword === "") {
    return baseURL;
  }
  return `${baseURL}&keyword=${keyword}`;
}

export function ResultsFetcher({ provider, type, pg, keyword, children }) {
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch(url({ provider, type, pg, keyword }), FETCH_OPTIONS)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.results);
        setResults(res.results);
      });
  }, []);

  return <React.Fragment>{children({ results })}</React.Fragment>;
}
