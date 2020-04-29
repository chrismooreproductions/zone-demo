import useGenres from '../../hooks/useGenres'
import { renderHook } from '@testing-library/react-hooks'
import genresData from '../data/genres.json'
import sortGenreDataById from '../../helpers/sortGenreDataById'
import { fakeServer } from 'sinon';
import config from '../../config'

const {rootUrl, postUrl} = config
let server

beforeEach(() => {
  server = fakeServer.create()
})

afterEach(() => {
  server.restore()
})

it('should start with genres as an empty array', () => {
  const { result } = renderHook(() => useGenres())
  expect(result.current.allGenres).toStrictEqual([])
})

it('should get and return genres based on the test data provided', async () => {
  const genreData = JSON.stringify(genresData)
  const url = `${rootUrl}/genre/movie/list${postUrl}`
  const { result, waitForNextUpdate } = renderHook(() => useGenres())

  server.respondWith('GET', url, [
    200,
    {},
    genreData
  ])

  server.respond()

  await waitForNextUpdate()

  const sortedGenreData = sortGenreDataById(JSON.parse(genreData).genres)

  expect(result.current.allGenres).toStrictEqual(sortedGenreData)
})