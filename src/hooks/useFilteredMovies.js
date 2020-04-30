import { useState, useEffect } from "react";
import filters from "../constants/filters";

import useMovies from "../hooks/useMovies";
import useGenres from "../hooks/useGenres";
import useUserRating from "./useUserRating";
import useUserFilter from "./useUserFilter";
import useUserGenres from "./useUserGenres";

import mapGenresToMovies from "../helpers/mapGenresToMovies";
import getGenresForMovies from "../helpers/getGenresForMovies";
import filterMoviesByGenre from "../helpers/filterMoviesByGenre";
import filterMoviesByRating from "../helpers/filterMoviesByRating";

const useFilteredMovies = (rating, genres, filter) => {
  const { GENRES, RATING } = filters;

  // State for movies and movie genres from api...
  const { movies } = useMovies();
  const { allGenres } = useGenres();

  // State for user preferences...
  const userRating = useUserRating(rating);
  const userFilter = useUserFilter(filter);
  const userGenres = useUserGenres(genres);

  // State for filteredMovies based on
  const [filteredMovies, setFilteredMovies] = useState({
    byGenre: [],
    byRating: [],
  });

  useEffect(() => {
    let byGenre = [];
    let byRating = [];

    // apply the filter based on the user's selected filter...
    switch (userFilter) {
      case GENRES:
        byGenre = filterMoviesByGenre(movies, userGenres);
        byRating = filterMoviesByRating(byGenre, userRating);
        break;
      case RATING:
        byRating = filterMoviesByRating(movies, userRating);
        byGenre = filterMoviesByGenre(byRating, userGenres);
        break;
      default:
        break;
    }

    setFilteredMovies({
      byGenre,
      byRating,
    });
  }, [filter, userFilter, GENRES, movies, userGenres, userRating, RATING]);

  const genresForMoviesById = getGenresForMovies(movies);

  const mappedGenres = genresForMoviesById.map((genreId) => {
    return allGenres.filter((genre) => genre.id === genreId)[0];
  });

  // finally, map the genres to the movies and return...
  switch (userFilter) {
    case GENRES:
      return [
        mapGenresToMovies(filteredMovies.byRating, allGenres),
        mappedGenres,
      ];
    case RATING:
      return [
        mapGenresToMovies(filteredMovies.byGenre, allGenres),
        mappedGenres,
      ];
    default:
      return [
        mapGenresToMovies(filteredMovies.byRating, allGenres),
        mappedGenres,
      ];
  }
};

export default useFilteredMovies;
