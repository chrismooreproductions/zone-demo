import config from "../config"

function getMovies() {
  const { rootUrl, postUrl } = config

  return fetch(`${rootUrl}/movie/now_playing${postUrl}`)
    .then((response) => response.json())
    .then((data) => data)
}

function getGenres() {
  const { rootUrl, postUrl } = config

  return fetch(`${rootUrl}/genre/movie/list${postUrl}`)
    .then((response) => response.json())
    .then((data) => data)
}

export { getMovies, getGenres }
