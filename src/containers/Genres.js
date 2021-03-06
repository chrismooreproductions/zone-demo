import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Genre from "../components/Genre"
import Fade from "../animated/Fade"
import downArrow from "../assets/images/down-arrow.svg"
import "../styles/containers/_genres.scss"

const Genres = ({
  allGenresForMovies,
  updateUserGenres,
  userGenres,
  setGenresDisplayed,
  displayed,
  className,
  animationDelay,
}) => {
  useEffect(() => {
    setGenresDisplayed(true)
  }, [setGenresDisplayed])

  return (
    <Fade
      displayed={displayed}
      className={className}
      animationDelay={animationDelay}
    >
      <h3 className="container-header">Genres</h3>
      <ul>
        {allGenresForMovies.length > 0
          ? allGenresForMovies.map((genre, index) => {
              return (
                <Genre
                  key={index}
                  genre={genre}
                  userGenres={userGenres}
                  updateUserGenres={updateUserGenres}
                />
              )
            })
          : // should have some loading handler component here...
            null}
      </ul>
      <div className="down-arrow">
        <img src={downArrow} alt="Movie genres down arrow" />
      </div>
    </Fade>
  )
}

Genres.propTypes = {
  allGenresForMovies: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  genresDisplayed: PropTypes.bool.isRequired,
  updateUserGenres: PropTypes.func.isRequired,
  userGenres: PropTypes.arrayOf(PropTypes.number).isRequired,
  setGenresDisplayed: PropTypes.func.isRequired,
  displayed: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  animationDelay: PropTypes.number.isRequired,
}

export default Genres
