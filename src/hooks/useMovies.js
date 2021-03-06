import { useState, useEffect } from "react"
import { getMovies } from "../api"

const useMovies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    // Pretty basic logc here for deciding
    // whether to getMovies or not. If there
    // aren't any movies stored in state, get
    // movies
    if (movies.length === 0) {
      const fetchData = async () => {
        const fetchedMovies = await getMovies()
        setMovies(fetchedMovies.results)
      }
      fetchData()
    }
  }, [movies])

  return { movies, setMovies }
}

export default useMovies
