const filterMoviesByGenre = (movies, genres) => {
  let moviesToReturn = []

  if ( genres.length === 0 ) {
    moviesToReturn = movies
  }

  if ( genres.length > 0 ) {
    const filteredMovies = movies.filter(movie => {
      // what we're doing is making all the comparisons (each userGenre vs each movie's genres)
      // then whatever the result pushing the bool value to this array.
      let doesContainAllUserGenres = []
      genres.forEach(g => {
        movie.genre_ids.includes(g) ? doesContainAllUserGenres.push(true) : doesContainAllUserGenres.push(false)
      })
      // then if any of the comparisons return false we return the movie in th loop as false as
      // it does not fulfill all the criteria for the search (i.e. film genres meet all the user genres 
      // criteria).
      return doesContainAllUserGenres.includes(false) ? false : true
    })
    moviesToReturn = filteredMovies
  }

  return moviesToReturn
}

export default filterMoviesByGenre