import { writeBin, getBins } from '../apis/knowyourbin'
// export const GET_BINS = 'GET_BINS'
// export const UPDATE_BIN = 'UPDATE_BIN'
export const ADD_BIN = 'ADD_BIN'
export const SET_BIN = 'SET_BIN'
export const SET_BINS = 'SET_BINS'

export function setBin(bin) {
  return {
    type: 'SET_BIN',
    payload: bin,
  }
}

export function setBins(bins) {
  return {
    type: 'SET_BINS',
    payload: bins,
  }
}

export function addBin(data) {
  return {
    type: ADD_BIN,
    payload: data,
  }
}

export function makeBin(bin) {
  return (dispatch) => {
    return writeBin(bin).then((data) => {
      dispatch(addBin(data))
      return null
    })
  }
}

export function readBins() {
  return (dispatch) => {
    return getBins().then((data) => {
      dispatch(setBins(data))
      return null
    })
  }
}
