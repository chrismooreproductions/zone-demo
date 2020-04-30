import { useState, useEffect } from "react"
import filters from "../constants/filters"

const useUserFilter = (filter) => {
  const { GENRES } = filters
  const [userFilter, setUserFilter] = useState(GENRES)

  useEffect(() => {
    if (filter !== userFilter) {
      setUserFilter(filter)
    }
  }, [userFilter, filter])

  return userFilter
}

export default useUserFilter
