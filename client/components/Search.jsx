import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

import { searchThing } from '../actions/forthings'

const Search = () => {
  const dispatch = useDispatch()
  const [thatBin, setSearch] = useState('')
  // const [searchbar, clearPrompt]= useState('Search any material')

  function handleChange(e) {
    setSearch(e.target.value)
    console.log(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('line 12 ', thatBin)
    dispatch(searchThing(thatBin))
    setSearch('')
  }
  return (
  <>
    <form onSubmit={handleSubmit}>
      <label htmlFor='search'/>
      <input type="search" className='searchbar' onChange={handleChange}/>
      <button type='submit' className='button' onClick={e=>handleSubmit(e)}>🔍</button>
      <br/><br/>
      <center> Get information about any material</center>
    </form>
  </>
)
}

export default Search