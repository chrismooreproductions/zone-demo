import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Movie from '../components/Movie'
import '../styles/containers/_movies.scss'
import Fade from '../animated/Fade'

const Movies = ({ movies, sidebarIn, moviesIn, setMoviesIn, allGenres, ...props }) => {
  useEffect(() => {
    if (sidebarIn && !moviesIn) {
      setMoviesIn(true)
    }
  }, [sidebarIn, moviesIn, setMoviesIn])
  
  return (
    <Fade
      displayed={props.displayed}
      className={props.className}
    >
      {movies.map((movie, index) => {
        return (
          <Movie 
            key={index}
            displayed={moviesIn}
            className="movie"
            animationDelay={index * 0.025}
            movie={movie}
          />
        )
      })}
    </Fade>
  )
}

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  moviesIn: PropTypes.bool.isRequired,
  setMoviesIn: PropTypes.func.isRequired,
  sidebarIn: PropTypes.bool.isRequired,
  displayed: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
}

export default Movies