import React, { useState, useEffect } from 'react'
import Header from '../containers/Header'
import Sidebar from '../containers/Sidebar'
import Movies from '../containers/Movies'
import '../styles/containers/_app.scss'
import useMovies from '../hooks/useMovies'
import useGenres from '../hooks/useGenres'
import { getGenresForMovies } from '../helpers/genres_movies'
import cloneObject from '../helpers/cloneObject'

function App() {
  const [userSelection, setUserSelection] = useState({
    maxRating: 3,
    uniqueGenres: '',
    userRating: 3,
    userGenres: [],
    userHasUpdatedRating: false,
    userHasUpdatedGenre: false
  })

  const [headerIn, setHeaderIn] = useState(false)
  const [sidebarIn, setSidebarIn] = useState(false)
  const [moviesIn, setMoviesIn] = useState(false)
  
  useEffect(() => {
    setHeaderIn(true)
  }, [headerIn])

  const movies = useMovies()
  const genres = useGenres()
  const allGenresForMovies = getGenresForMovies(movies)

  const updateUserGenres = (e, val) => {
    if (e.target.checked) {
      const updatedGenres = cloneObject(userSelection.userGenres)
      updatedGenres.push(val)
      setUserSelection({
        ...userSelection,
        userGenres: updatedGenres
      })
    }
    if (!e.target.checked) {
      const updatedGenres = cloneObject(userSelection.userGenres)
      const genreIndex = updatedGenres.indexOf(val)
      updatedGenres.splice(genreIndex, 1)
      setUserSelection({
        ...userSelection,
        userGenres: updatedGenres
      })
    }
  }

  const updateRating = (userRating) => {
    setUserSelection({
      ...userSelection,
      userRating
    })
  }

  return (
    <>
      <Header
        displayed={headerIn}
        className="header"
      />
      <Sidebar
        allGenres={genres}
        sidebarIn={sidebarIn}
        updateRating={updateRating}
        rating={userSelection.userRating}
        allGenresForMovies={allGenresForMovies}
        updateUserGenres={updateUserGenres}
        setUserSelection={setUserSelection}
        userGenres={userSelection.userGenres}
        setSidebarIn={setSidebarIn}
      />
      <Movies
        allGenres={genres}
        sidebarIn={sidebarIn}
        moviesIn={moviesIn}
        setMoviesIn={setMoviesIn}
        displayed={moviesIn}
        userRating={userSelection.userRating}
        userGenres={userSelection.userGenres}
        movies={movies}
        className='movies'
      />
    </>
  )
}

export default App;
