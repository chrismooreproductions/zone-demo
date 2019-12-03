import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { genreProp } from '../proptypes'
import Genre from '../components/Genre'
import withFade from '../animatedComponents/withFade'
import '../styles/containers/_genres.scss'

const Genres = ({allGenresForMovies, allGenres, updateUserGenres, userGenres, genresDisplayed, setGenresDisplayed}) => {
  useEffect(() => {
    setGenresDisplayed(true)
  }, [genresDisplayed, setGenresDisplayed])
  
  return (
    <React.Fragment>
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
    </React.Fragment>
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

export default withFade(Genres)