import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { genreProp } from '../proptypes'
import Genres from './Genres'
import Ratings from './Ratings'
import '../styles/containers/_sidebar.scss'
import '../styles/components/_checkbox.scss'

const Sidebar = ({ allGenresForMovies, allGenres, updateUserGenres, userGenres, updateRating, rating, sidebarIn, setSidebarIn }) => {
  
  // These two state values are the switches for the sidebar panel animations.
  const [genresDisplayed, setGenresDisplayed] = useState(false)
  const [ratingsDisplayed, setRatingsDisplayed] = useState(false)

  useEffect(() => {
    if (genresDisplayed && ratingsDisplayed && !sidebarIn) {
      // this is the prop that sets the sidebar visibility to true, then we can
      // animate the movies in...
      setSidebarIn(true)
    }
  })
  
  return (
    // TODO: implement error handling here in case no movies ando/or genre
    // data is available.
    <div className='sidebar'>
      {
        // basically check if there is any genre data, else we should do something else
        allGenresForMovies.length > 0 &&
        allGenres.length > 0 &&
        <Genres
          allGenresForMovies={allGenresForMovies}
          allGenres={allGenres}
          updateUserGenres={updateUserGenres}
          userGenres={userGenres}
          setGenresDisplayed={setGenresDisplayed}
          displayed={genresDisplayed}
          className='genres'
          animationDelay={0}
        />
      }
      {
        <Ratings
          displayed={ratingsDisplayed}
          setRatingsDisplayed={setRatingsDisplayed}
          genresDisplayed={genresDisplayed}
          updateRating={updateRating}
          rating={rating}
          className="ratings"
          animationDelay={0.2}
        />
      }
    </div>
  )
}

Sidebar.propTypes = {
  allGenres: PropTypes.arrayOf(genreProp).isRequired,
  sidebarIn: PropTypes.bool.isRequired,
  updateRating: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
  allGenresForMovies: PropTypes.arrayOf(PropTypes.number).isRequired,
  setUserSelection: PropTypes.func.isRequired,
  userGenres: PropTypes.arrayOf(PropTypes.number).isRequired,
  updateUserGenres: PropTypes.func.isRequired,
  setSidebarIn: PropTypes.func.isRequired
}

export default Sidebar