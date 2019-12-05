import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import '../styles/components/_genre.scss'

const Genre = ({ genre, userGenres, updateUserGenres }) => {
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    if (genre) {
      if (userGenres.includes(genre.id)) setIsChecked(true)
    }
  }, [genre, userGenres])

  // Let's assume genres don't share ID's please...
  return (
    <>
      { genre ?
        <li className="genre">
          <input
            key={genre.id}
            className="checkbox regular-checkbox"
            defaultChecked={isChecked}
            type="checkbox"
            onChange={(e) => updateUserGenres(e, genre.id)}
          />
          <span className="--name">{genre.name}</span>
        </li>
        : null
      }   
    </>
  )
}

Genre.propTypes = {
  genre: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }),
  userGenres: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateUserGenres: PropTypes.func.isRequired,
}

export default Genre