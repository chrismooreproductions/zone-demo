import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { genreProp } from '../proptypes'
import Movie from '../components/Movie'
import '../styles/containers/_movies.scss'
import Fade from '../animated/Fade'

const Movies = ({ movies, sidebarIn, moviesIn, setMoviesIn, allGenres, userRating, userGenres, ...props }) => {
  const [moviesByGenre, setMoviesByGenre] = useState([])
  const [moviesByRating, setMoviesByRating] = useState([])

  // do tha animatons in...
  useEffect(() => {
    if (sidebarIn && !moviesIn) {
      setMoviesIn(true)
    }
  }, [sidebarIn, moviesIn, setMoviesIn])
  
  // Executive decision - we're going to filter on the user's selected movies
  // first then we're going to filter by rating...
  
  // So, set the moviesByGenre in state first.
  useEffect(() => {
    if ( userGenres.length === 0 ) {
      setMoviesByGenre(movies)
    }

    if ( userGenres.length > 0) {
      const filteredMovies = movies.filter(movie => {
        // what we're doing is making all the comparisons (each userGenre vs each movie's genres)
        // then whatever the result pushing the bool value to this array.
        let doesContainAllUserGenres = []
        userGenres.forEach(g => {
          movie.genre_ids.includes(g) ? doesContainAllUserGenres.push(true) : doesContainAllUserGenres.push(false)
        })
        // then if any of the comparisons return false we return the movie in th loop as false as
        // it does not fulfill all the criteria for the search (i.e. film genres meet all the user genres 
        // criteria).
        if (doesContainAllUserGenres.includes(false)) return false
        return true
      })
      setMoviesByGenre(filteredMovies)
    }
  }, [userGenres, movies])

  // Then, filter by rating...this is where ideally we would have a dropdown option to filter
  // by genre or rating first.
  useEffect(() => {
    const ratedMovies = moviesByGenre.filter(movie => {
      return movie.vote_average >= userRating
    })
    setMoviesByRating(ratedMovies)
  }, [moviesByGenre, userRating])

  return (
    // Fades m8
    <Fade
      displayed={props.displayed}
      className={props.className}
    >
      {moviesByRating.map((movie, index) => {
        return (
          <Movie 
            key={index}
            displayed={moviesIn}
            className="movie"
            animationDelay={index * 0.025}
            movie={movie}
            genres={allGenres}
          />
        )
      })}
    </Fade>
  )
}

Movies.propTypes = {
  allGenres: PropTypes.arrayOf(genreProp).isRequired,
  sidebarIn: PropTypes.bool.isRequired,
  moviesIn: PropTypes.bool.isRequired,
  setMoviesIn: PropTypes.func.isRequired,
  displayed: PropTypes.bool.isRequired,
  userRating: PropTypes.number.isRequired,
  userGenres: PropTypes.arrayOf(PropTypes.number).isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  className: PropTypes.string.isRequired
}

export default Movies