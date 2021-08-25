import React from 'react'

function RenderMovie(movie) {
    return (
        <div id="movieDiv">
            {movie.title}
            <div className="card">
                <h4>{movie.title}</h4>
                <img className="movie-poster" src={movie.posterURLs["500"]} alt={movie.title}><a href={`https://www.imdb.com/title/${movie.imdbID}/`} target="_blank" rel="noreferrer"></a></img>
            </div>
        </div>
    )
}

export default RenderMovie
