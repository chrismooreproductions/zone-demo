import cloneObject from "./cloneObject"

const mapGenresToMovies = (movies, genres) => {
  const newMovies = cloneObject(movies)
  return newMovies.map(movie => {
    const genreMap = movie.genre_ids.map(genreId => {
      return genres.filter(genre => genre.id === genreId)[0]
    })
    return {
      ...movie,
      genres: genreMap
    }
  })
}

export default mapGenresToMovies