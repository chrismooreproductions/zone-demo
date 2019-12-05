import React, { useState, useEffect } from 'react'
import Header from '../containers/Header'
import Sidebar from '../containers/Sidebar'
import Movies from '../containers/Movies'
import filters from '../constants/filters'
import '../styles/containers/_app.scss'

import useFilteredMovies from '../hooks/useFilteredMovies'
import cloneObject from '../helpers/cloneObject'

function App() {
  const { GENRES } = filters

  const [userGenres, setUserGenres] = useState([])
  const [userRating, setUserRating] = useState(3)
  const userFilter = GENRES

  const [headerIn, setHeaderIn] = useState(false)
  const [sidebarIn, setSidebarIn] = useState(false)
  const [moviesIn, setMoviesIn] = useState(false)
  
  const [filteredMovies, allGenresForMovies] = useFilteredMovies(
    userRating,
    userGenres,
    userFilter
  )
  
  useEffect(() => {
    setHeaderIn(true)
  }, [headerIn])

  const updateUserGenres = (e, val) => {
    if (e.target.checked) {
      const updatedUserGenres = cloneObject(userGenres)
      updatedUserGenres.push(val)
      setUserGenres(updatedUserGenres)
    }
    if (!e.target.checked) {
      const updatedUserGenres = cloneObject(userGenres)
      const genreIndex = updatedUserGenres.indexOf(val)
      updatedUserGenres.splice(genreIndex, 1)
      setUserGenres(updatedUserGenres)
    }
  }

  const updateRating = (rating) => {
    setUserRating(rating)
  }

  return (
    <>
      <Header
        displayed={headerIn}
        className="header"
      />
      <Sidebar
        sidebarIn={sidebarIn}
        userRating={userRating}
        updateRating={updateRating}
        userGenres={userGenres}
        updateUserGenres={updateUserGenres}
        allGenresForMovies={allGenresForMovies}
        setSidebarIn={setSidebarIn}
      />
      <Movies
        movies={filteredMovies}
        moviesIn={moviesIn}
        setMoviesIn={setMoviesIn}
        sidebarIn={sidebarIn}
        displayed={moviesIn}
        className='movies'
      />
    </>
  )
}

export default App;
