import React from 'react'
import PropTypes from 'prop-types'
import Fade from '../animated/Fade'
import config from '../config'

const Movie = ({ movie, ...props }) => {
  return (
    <Fade
      displayed={props.displayed}
      className={props.className}
      animationDelay={props.animationDelay}
    >
      <img src={`${config.imageRootUrl}${movie.poster_path}`} width="100" alt={`${movie.title} poster`} />
      <div className="--info">
        <h3 className="--title">
          {movie.title}
        </h3>
        <h4 className="--genre-title">Genres:</h4>
        <ul className="--genres">
          {
            movie.genres.map((g, index)=> {
              return <li className="--genre" key={index}>{g.name}</li>
            })
          }
        </ul>
      </div>
    </Fade>
  )
}

Movie.propTypes = {
  displayed: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  animationDelay: PropTypes.number.isRequired,
  movie: PropTypes.shape({}).isRequired,
}

export default Movie