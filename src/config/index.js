const config = {
  apiKey: "a5352b2c87992f3c5cbd967e562bc5b2",
  rootUrl: "https://api.themoviedb.org/3",
  get postUrl() {
    return `?api_key=${this.apiKey}&language=en-US&page=1`
  },
  imageRootUrl: "https://image.tmdb.org/t/p/w342",
}

export default config
