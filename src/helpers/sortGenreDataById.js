const sortGenreDataById = (genreIds) => {
  return genreIds.sort((a, b) => {
    return a.id - b.id
  })
}

export default sortGenreDataById
