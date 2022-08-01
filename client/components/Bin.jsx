import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function Bin() {
  const params = useParams()

  const bins = useSelector((state) => state.bins)
  const thisBin = bins.find((bin) => bin.id === Number(params.id))

  return (
    <span>
      <center>
        <p>
          <strong>How to use this bin properly:</strong>
        </p>
        {thisBin && <p>{thisBin.rules}</p>}
        <p>
          <strong>Where to find this bin?</strong>
        </p>
        {thisBin && <p>{thisBin.location}</p>}
        <p>
          <strong>What the bin looks like:</strong>
        </p>
        {thisBin && <p>{thisBin.image}</p>}
        <p>
          <strong>Additional comments:</strong>
        </p>
        {thisBin && <p>{thisBin.notes}</p>}
        <br />
        <br />
      </center>
    </span>
  )
}

export default Bin
