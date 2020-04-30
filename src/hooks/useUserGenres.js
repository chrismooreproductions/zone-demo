import { useState, useEffect } from "react"
import findEqual from "../helpers/findEqual"

const useUserGenres = (genres) => {
  const [userGenres, setUserGenres] = useState([])

  useEffect(() => {
    if (!findEqual(genres, userGenres)) {
      setUserGenres(genres)
    }
  }, [userGenres, genres])

  return userGenres
}

export default useUserGenres
