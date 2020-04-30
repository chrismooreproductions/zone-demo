import { useState, useEffect } from "react";
import { getGenres } from "../api";
import sortGenreDataById from "../helpers/sortGenreDataById";

const useGenres = () => {
  // please sort genres numerically ascending...
  const [allGenres, setGenres] = useState([]);

  useEffect(() => {
    if (allGenres.length === 0) {
      const fetchData = async () => {
        let genres = await getGenres();
        genres = sortGenreDataById(genres.genres);
        setGenres(genres);
      };

      fetchData();
    }
  }, [allGenres.length]);

  return { allGenres, setGenres };
};

export default useGenres;
