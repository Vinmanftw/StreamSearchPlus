import React,{useEffect} from 'react'

function FetchByProvider(provider, type, pg, keyword) {
    const GET = {
        method: "GET",
        headers: {
            "x-rapidapi-key": "956f6f9355mshb2c039180194fb0p15f298jsnfaa5a99353d3",
            "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
        },
    }

    function url(provider, type, pg, keyword) {
        const baseURL = `https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=${provider}&type=${type}&genre=18&page=${pg}&language=en`;
        if (keyword === "") {
          return baseURL;
        }
        return `${baseURL}&keyword=${keyword}`;
    }
    
    useEffect(() => {
        fetch(url(provider, type, pg. keyword),GET).then(
            (res) => {
                return (res.json())
            }
         )
    },[])
    
}

export default FetchByProvider
