import {useState, useEffect} from 'react'

const useUserRating = (rating) => {
  const [userRating, setUserRating] = useState(0)

  useEffect(() => {
    if (rating !== userRating) {
      setUserRating(rating)
    }
  }, [userRating, rating])

  return userRating
}

export default useUserRating