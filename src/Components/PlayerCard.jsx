import React from 'react'
import { Link } from 'react-router-dom'

const PlayerCard = ({data}) => {
  return (
    <div className="col">
    <Link to={`${data.id}`}>
      <div className="card">
        <div className="player_image">
          {data.image ? (
            <img src={data.image} alt="..." />
          ) : (
            <img src="./Images/crfa_logo.png" className="no-img" alt="..." />
          )}
        </div>
        <div className="player_name p-sm-3 p-2 mb-0">
          <h6 className="fw-bold player_number">{data.number}</h6>
          <h6 className="fw-bold m-0 text-uppercase">
            {data.lastname} <br />
            {data.firstname}
          </h6>
        </div>
      </div>
    </Link>
  </div>
  )
}

export default PlayerCard