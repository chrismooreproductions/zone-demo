import {useState, useEffect} from 'react'
import { getGenres } from '../api'

const sortGenreDataById = (genreIds) => {
  return genreIds.sort((a, b) => {
    return a.id - b.id
  })
}

const useGenres = () => {
  // please sort genres numerically ascending...
  const [genres, setGenres] = useState([])
  
  useEffect(() => {
    if (genres.length === 0) { // if we were going to expand this we could also check if the genreIds array matches the corresponding genre array as a concatted string - if they don't match update.
      const fetchData = async () => {
        let genres = await getGenres()
        genres = sortGenreDataById(genres.genres)
        setGenres(genres)
      }

      fetchData()
    }
  }, [genres.length])

  return genres
}

export default useGenres