import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import Genre from '../components/Genre'
import '../styles/containers/_genres.scss'
import Fade from '../animated/Fade'

const Genres = ({
  allGenresForMovies,
  updateUserGenres,
  userGenres,
  genresDisplayed,
  setGenresDisplayed,
  displayed,
  className,
  animationDelay
}) => {
  useEffect(() => {
    setGenresDisplayed(true)
  }, [genresDisplayed, setGenresDisplayed])
  
  return (
    <Fade
      displayed={displayed}
      className={className}
      animationDelay={animationDelay}
    >
      <h3 className="container-header">Genres</h3>
      <ul>
        {
          (
            allGenresForMovies.length > 0
          ) ? 
            allGenresForMovies.map((genre, index) => {       
              return (
                <Genre
                  key={index}
                  genre={genre}
                  userGenres={userGenres}
                  updateUserGenres={updateUserGenres}
                />
              )
            }) 
            :  // should have some loading handler component here...
            null
        }
      </ul>
    </Fade>
  )
}

Genres.propTypes = {
  allGenresForMovies: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  updateUserGenres: PropTypes.func.isRequired,
  userGenres: PropTypes.arrayOf(PropTypes.number).isRequired,
  setGenresDisplayed: PropTypes.func.isRequired,
  displayed: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  animationDelay: PropTypes.number.isRequired
}

export default Genres