export const REQUEST_MOVIE = 'REQUEST_MOVIE'
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE'
export const SELECT_MOVIE = 'SELECT_MOVIE'

export const selectMovie = () => ({
  type: SELECT_MOVIE
})

export const requestMovie = () => ({
  type: REQUEST_MOVIE
})

export const receiveMovie = (json) => ({
  type: RECEIVE_MOVIE,
  movies: json.data || [json],
  receivedAt: Date.now()
})

export const fetchMovieById = (id) => dispatch => {
    dispatch(requestMovie())
    return fetch(`http://react-cdp-api.herokuapp.com/movies/${id}`)
        .then(response => response.json())
        .then(json => dispatch(receiveMovie(json)))
}

export const fetchMovie = (query, by) => dispatch => {
  dispatch(requestMovie(query, by))
  return fetch(`http://react-cdp-api.herokuapp.com/movies?search=${query}&searchBy=${by.toLowerCase()}`)
    .then(response => response.json())
    .then(json => dispatch(receiveMovie(json)))
}


export const mapStateToProps = state => {
    const movies = state.moviesByQuery || {};

    return {
        isFetching: movies.isFetching === true ? true : false,
        lastUpdated: movies.lastUpdated || Date.now(),
        movies: movies.movies || []
    }
};