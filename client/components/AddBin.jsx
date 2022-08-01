import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { makeBin, readBins } from '../actions/forbins'
// import Bin from './Bin'

const defaultForm = {
  rules: '',
  notes: '',
  // collectionday: '',
  location: '',
  image: '',
}

const AddBin = () => {
  const [newBin, setNewBin] = useState(defaultForm)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(makeBin(newBin))
      .then(() => {
        dispatch(readBins())
      })
      .then((newBin) => {
        const id = newBin.id
        navigate(`../bin/${id}`)
      })
      .catch((err) => {
        console.error('We failed to fetch the newBin id that quickly. ', err)
      })
    setNewBin(defaultForm)
  }

  function handleChange(e) {
    setNewBin({
      ...newBin,
      [e.target.id]: e.target.value,
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="rules">
          What can go in this bin, and in what condition?
        </label>
        <br />
        <input
          type="text"
          id="rules"
          value={newBin.rules}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="location">
          Describe where a guest will find this bin
        </label>
        <br />
        <input
          type="text"
          id="location"
          value={newBin.location}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="image">
          If you have a picture of the bin, upload the URL here (tip: you could
          copy the link from google photos or another cloud hosting service)
        </label>
        <br />
        <input
          type="text"
          id="image"
          value={newBin.image}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="notes">Any other notes?</label>
        <br />
        <input
          type="text"
          id="notes"
          value={newBin.notes}
          onChange={handleChange}
        />
        <br />
        <br />
        <button className="button" type="submit">
          Create
        </button>
      </form>
    </>
  )
}

export default AddBin
