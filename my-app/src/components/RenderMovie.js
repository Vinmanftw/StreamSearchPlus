import React from 'react'

function RenderMovie(movie) {
    return (
        <div id="movieDiv">
            {movie.title}
            <div className="card">
                <h4>{movie.title}</h4>
                <img className="movie-poster" src={movie.posterURLs["500"]} alt={movie.title} href={`https://www.imdb.com/title/${movie.imdbID}/`} />
            </div>
        </div>
    )
}

export default RenderMovie
