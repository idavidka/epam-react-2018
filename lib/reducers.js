import { combineReducers } from 'redux'
import { RECEIVE_MOVIE, REQUEST_MOVIE } from './actions'

const movies = (state = {
  isFetching: false,
  movies: []
}, action) => {
  switch (action.type) {
    case REQUEST_MOVIE:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_MOVIE:
      return {
        ...state,
        isFetching: false,
        movies: action.movies,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

const moviesByQuery = (state = { }, action) => {
    switch (action.type) {
        case REQUEST_MOVIE:
        case RECEIVE_MOVIE:
            return {
                ...state,
                ...movies(state, action)
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    moviesByQuery
})

export default rootReducer
