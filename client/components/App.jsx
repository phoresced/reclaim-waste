import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import NavBins from './NavBins'
import AddBin from './AddBin'
import Bin from './Bin'
import Search from './Search'
import Footer from './Footer'

import { readBins } from '../actions/forbins'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(readBins())
  }, [])

  return (
    <>
      <header className="header">
        <h1>The Bin</h1>
        {/* TODO: Break out into component which redirects to home */}
      </header>
      <div className="tagline">Where waste becomes a resource</div>
      <NavBins />
      <div className="container">
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/new" element={<AddBin />} />
          <Route path="/bin/:id" element={<Bin />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
