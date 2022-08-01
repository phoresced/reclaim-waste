import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import NavBin from './NavBin'

const NavBins = () => {
  const bins = useSelector((state) => state.bins)

  return (
    <>
      <div className="nav">
        {bins &&
          bins.map((bin) => {
            return <NavBin key={bin.id} id={bin.id} />
          })}
        <Link className="addNew" to="/new">
          <div>+</div>
        </Link>
      </div>
    </>
  )
}

export default NavBins
