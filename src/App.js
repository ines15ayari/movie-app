import React, {useState,useEffect}from "react";
import { movieData } from "./components/movieData";
import './App.css'
import {Carousel} from "react-bootstrap"

import MovieList from "./components/MovieList"
import Search from "./components/Search/Search"
import Add from './components/AddMovie/AddMovie'


function App() {
  const [movieList, setMovieList] = useState(movieData)
  const [filterName, setfilterName] = useState("")
  const [filterStars, setfilterStars] = useState(1)
  const [movie, setMovie] = useState('')

  const movieJdid = (str) =>{
    setMovie(str)
    
  }

  useEffect(() => {
    movie?setMovieList(movieList=>[...movieList,movie]):console.log("object")
    
  }, [movie])

  return (

<div className="background">

  <div>
  <Carousel>
  <Carousel.Item interval={1000}>
  <Carousel.Caption>
      <h1 style={{marginBottom:'58%',fontSize:'80px'}}>MOVIE APP</h1>

    </Carousel.Caption>
    
    <img 
      className="d-block w-100"
      width='5%'
      src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      alt="First slide"
    />
    

  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      alt="Third slide"
    />
    <Carousel.Caption>
      {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
  </div>
  <Search setfilterName={setfilterName} 
    setfilterStars={setfilterStars}
    filterStars={filterStars} />
    <Add handleChange={movieJdid}/>
         <MovieList 
         filterStars={filterStars}
         filterName={filterName}
         movieList={movieList} />
         
        </div>
  )
}

export default App;
