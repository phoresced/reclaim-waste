import { /* UPDATE_BIN,*/ SET_BINS, ADD_BIN } from '../actions/forbins'

const defaultState = []

function bins(state = defaultState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_BINS:
      return payload
    // case UPDATE_BIN:
    //   return payload
    case ADD_BIN:
      return [...state, payload]
    default:
      return state
  }
}

export default bins
