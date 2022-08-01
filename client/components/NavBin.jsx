import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBin({ id }) {
  return (
    <>
      <Link to={`bin/${id}`}>
        <div key={id}>
          <img
            className="icon"
            src={'/images/bin.png'}
            alt="Click this bin to learn about it"
          />
        </div>
      </Link>
    </>
  )
}
