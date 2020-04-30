const mapGenresToMovies = (movies, genres) => {
  return movies.map((movie) => {
    const genreMap = movie.genre_ids.map((genreId) => {
      return genres.filter((genre) => genre.id === genreId)[0];
    });
    return {
      ...movie,
      genres: genreMap,
    };
  });
};

export default mapGenresToMovies;
