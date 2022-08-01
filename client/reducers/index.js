import { combineReducers } from 'redux'
import haberdashery from './materialquery'
import bins from './binquery'

export default combineReducers({
  haberdashery,
  bins,
})
