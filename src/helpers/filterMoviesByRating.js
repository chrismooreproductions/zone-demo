const filterMoviesByRating = (movies, rating) => {
  const ratedMovies = movies.filter((movie) => {
    return movie.vote_average >= rating
  })
  return ratedMovies
}

export default filterMoviesByRating
