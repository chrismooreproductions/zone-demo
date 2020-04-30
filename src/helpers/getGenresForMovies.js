const getGenresForMovies = (movies) => {
  const genresForMovies = []
  if (movies) {
    movies.forEach((movie) => {
      for (let gId in movie.genre_ids) {
        genresForMovies.push(movie.genre_ids[gId])
      }
    })
    genresForMovies.sort((a, b) => a - b)
    return Array.from(new Set(genresForMovies))
  }
  return []
}

export default getGenresForMovies
