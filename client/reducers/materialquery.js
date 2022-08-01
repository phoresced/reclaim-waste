import { WHICH_BIN, UPDATE_THING, ADD_THING } from '../actions/forthings'

function haberdashery(state = {}, action) {
  const { type, payload } = action

  switch (type) {
    case WHICH_BIN:
      return payload
    case UPDATE_THING:
      return payload
    case ADD_THING:
      return payload
    default:
      return state
  }
}

export default haberdashery
