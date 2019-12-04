import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { genreProp } from '../proptypes'
import Genre from '../components/Genre'
import '../styles/containers/_genres.scss'
import Fade from '../animated/Fade'

const Genres = ({allGenresForMovies, allGenres, updateUserGenres, userGenres, genresDisplayed, setGenresDisplayed, ...props}) => {
  useEffect(() => {
    setGenresDisplayed(true)
  }, [genresDisplayed, setGenresDisplayed])
  
  return (
    <Fade
      displayed={props.displayed}
      className={props.className}
      animationDelay={props.animationDelay}
    >
      <h3 className="container-header">Genres</h3>
      <ul>
        {
          (
            allGenresForMovies.length > 0 &&
            allGenres.length > 0
          ) ? 
            allGenresForMovies.map((genre, index) => {
              const animationProps = {
                delay: index * 50,
                duration: 300
              }
          
              return (
                <Genre
                  key={index}
                  index={index}
                  genre={genre}
                  allGenres={allGenres}
                  userGenres={userGenres}
                  updateUserGenres={updateUserGenres}
                  animationProps={animationProps}
                  displayed={genresDisplayed}
                  className='genre'
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
  allGenresForMovies: PropTypes.arrayOf(PropTypes.number).isRequired,
  allGenres: PropTypes.arrayOf(genreProp).isRequired,
  updateUserGenres: PropTypes.func.isRequired,
  userGenres: PropTypes.arrayOf(PropTypes.number).isRequired,
  setGenresDisplayed: PropTypes.func.isRequired,
  displayed: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  animationDelay: PropTypes.number.isRequired
}

export default Genres