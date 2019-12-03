import React, {useState, useEffect} from 'react'
import '../styles/components/_genre.scss'

const Genre = ({ allGenres, genre, userGenres, updateUserGenres, transitionState, styles, transitionStyles }) => {
  const [isChecked, setIsChecked] = useState(false)

  const fetchedGenre = allGenres.filter(filteredGenre => {
    return filteredGenre.id === genre
  })

  useEffect(() => {
    if (userGenres.includes(fetchedGenre[0].id)) setIsChecked(true)
  }, [fetchedGenre, userGenres])

  // Let's assume genres don't share ID's please...
  return (
    <li className="genre">
      <input
        key={fetchedGenre[0].id}
        className="checkbox regular-checkbox"
        defaultChecked={isChecked}
        type="checkbox"
        onChange={(e) => updateUserGenres(e, fetchedGenre[0].id)}
      />
      <span className="--name">{fetchedGenre[0].name}</span>
    </li>
  )
}

export default Genre