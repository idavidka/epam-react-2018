export const REQUEST_MOVIE = 'REQUEST_MOVIE'
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE'
export const SELECT_MOVIE = 'SELECT_MOVIE'

export const selectMovie = (query, by) => ({
  type: SELECT_MOVIE,
  query,
  by
})

export const requestMovie = (query, by) => ({
  type: REQUEST_MOVIE,
  query,
  by
})

export const receiveMovie = (query, by, json) => ({
  type: RECEIVE_MOVIE,
  query,
  by,
  movies: json.data,
  receivedAt: Date.now()
})

export const fetchMovie = (query, by) => dispatch => {
  dispatch(requestMovie(query, by))
  return fetch(`http://react-cdp-api.herokuapp.com/movies?search=${query}&searchBy=${by.toLowerCase()}`)
    .then(response => response.json())
    .then(json => dispatch(receiveMovie(query, by, json)))
}