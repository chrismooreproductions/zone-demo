import {useState, useEffect} from 'react'
import { getGenres } from '../api'
import sortGenreDataById from '../helpers/sortGenreDataById'

const useGenres = () => {
  // please sort genres numerically ascending...
  const [allGenres, setGenres] = useState([])
  
  useEffect(() => {
    if (allGenres.length === 0) { // if we were going to expand this we could also check if the genreIds array matches the corresponding genre array as a concatted string - if they don't match update.
      const fetchData = async () => {
        let genres = await getGenres()
        genres = sortGenreDataById(genres.genres)
        setGenres(genres)
      }

      fetchData()
    }
  }, [allGenres.length])

  return { allGenres, setGenres }
}

export default useGenres