import useMovies from '../../hooks/useMovies'
import { renderHook } from '@testing-library/react-hooks'
import moviesData from '../data/movies.json'
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

it('should start with movies as an empty array', () => {
  const { result } = renderHook(() => useMovies())
  expect(result.current.movies).toStrictEqual([])
})

it('should get movies', async () => {
  const expectedData = JSON.stringify(moviesData)
  const url = `${rootUrl}/movie/now_playing${postUrl}`
  const { result, waitForNextUpdate } = renderHook(() => useMovies())
  
  server.respondWith('GET', url, [
    200,
    {},
    expectedData
  ])

  server.respond()

  await waitForNextUpdate()

  expect(result.current.movies).toStrictEqual(JSON.parse(expectedData).results)
})