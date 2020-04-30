import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Slider from "react-input-slider"
import Fade from "../animated/Fade"

const Ratings = ({
  updateRating,
  userRating,
  genresDisplayed,
  ratingsDisplayed,
  setRatingsDisplayed,
  ...props
}) => {
  useEffect(() => {
    if (!ratingsDisplayed && genresDisplayed) setRatingsDisplayed(true)
  })

  return (
    <Fade
      displayed={props.displayed}
      className={props.className}
      animationDelay={props.animationDelay}
    >
      <h3 className="container-header">Ratings</h3>
      <div className="container-contents">
        <p>Current Rating: {userRating}</p>
        <Slider
          axis="x"
          xstep={0.5}
          xmin={0}
          xmax={10}
          x={userRating}
          onChange={({ x }) => updateRating(parseFloat(x.toFixed(2)))}
          styles={{
            track: {
              width: "100%",
            },
          }}
        />
      </div>
    </Fade>
  )
}

Ratings.propTypes = {
  displayed: PropTypes.bool.isRequired,
  setRatingsDisplayed: PropTypes.func.isRequired,
  genresDisplayed: PropTypes.bool.isRequired,
  updateRating: PropTypes.func.isRequired,
  userRating: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  animationDelay: PropTypes.number.isRequired,
}

export default Ratings
