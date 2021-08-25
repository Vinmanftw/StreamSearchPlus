import React,{useEffect} from 'react'
import FetchByProvider from './FetchByProvider.js'
import RenderMovie from './RenderMovie.js'
function FetchAndRender({provider, type, curIndex, keyword}) {
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
    
    const cards = useEffect(() => {
        fetch(url(provider, type, curIndex, keyword),GET)
        .then(
            (res) => (res.json()))
            .then((res) => {
                console.log(res.results)
                res.results.map(Movie => <RenderMovie key={Movie.id}/>)

            })
        }
    )
    
    
    return (
        <div>
            <div id="movie-container">
                {cards}
            </div>
        </div>
    )
}

export default FetchAndRender
