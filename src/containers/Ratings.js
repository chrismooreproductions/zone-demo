import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-input-slider';
import withFade from '../animatedComponents/withFade'

const Ratings = ({ updateRating, rating, genresDisplayed, ratingsDisplayed, setRatingsDisplayed }) => {
  useEffect(() => {
    if (!ratingsDisplayed && genresDisplayed) setRatingsDisplayed(true) 
  })

  return (
    <React.Fragment>
      <h3 className="container-header">Ratings</h3>
      <div className="container-contents">
        <p>Current rating: {rating}</p>
        <Slider
          axis="x"
          xstep={0.5}
          xmin={0}
          xmax={10}
          x={rating}
          onChange={({ x }) => updateRating( parseFloat(x.toFixed(2)) )}
          styles={{
            track: {
              width: '100%'
            }
          }}
        />
      </div>
    </React.Fragment>
  )
}

Ratings.propTypes = {
  displayed: PropTypes.bool.isRequired,
  setRatingsDisplayed: PropTypes.func.isRequired,
  genresDisplayed: PropTypes.bool.isRequired,
  updateRating: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  animationDelay: PropTypes.number.isRequired
}

export default withFade(Ratings)