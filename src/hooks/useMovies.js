import {useState, useEffect} from 'react'
import { getMovies } from '../helpers/api'

const useMovies = (genre, rating) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    if (movies.length === 0) {
      const fetchData = async () => {
        const fetchedMovies = await getMovies()
        // ohhhh...you never know when you're gonna need a ref...
        setMovies(fetchedMovies.results)
      }
      fetchData()
    }
  }, [movies])

  
  return movies
}

export default useMovies