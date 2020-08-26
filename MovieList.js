import React from 'react'
import MovieCard from './movieCard/MovieCard'
import './movieList.css'

function MovieList({movieList,filterName,filterStars}) {
    return (
        <div className="cards">
        {movieList.filter(movie=>

        movie.rate >= filterStars &&
        movie.name.toLowerCase().includes(filterName.toLowerCase().trim()))
       .map(movie=>
          <MovieCard movie={movie}/>)}
        </div>
    )
}

export default MovieList
