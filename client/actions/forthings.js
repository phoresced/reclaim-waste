// import request from 'superagent'
import { whichBin } from '../apis/thingdatum'
import { getBin } from '../apis/knowyourbin'

export const WHICH_BIN = 'WHICH_BIN'
export const UPDATE_THING = 'UPDATE_THING'
export const ADD_THING = 'ADD_THING'

// TODO: addThing

// db update function will need a corresponding patch in API so response returns res.body with correct changes
export function saveThing(response) {
  return {
    type: UPDATE_THING,
    payload: response,
  }
}

// THUNKY? Dispatch API queries
export function searchThing(thing) {
  const ref = thing.id
  const thunk = (dispatch) => {
    return whichBin(thing)
      .then(() => {
        dispatch(getBin(ref))
      })
      .catch((err) => {
        console.log('You have work to do in your actions for things! ', err)
      })
  }
  return thunk
}
