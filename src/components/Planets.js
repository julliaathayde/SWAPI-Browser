import React from 'react'
import {Link} from 'react-router-dom'

function getPlanetsId(plan) {
  const parts = plan.url.split('/').filter(Boolean)
  return parts[parts.length - 1]
}

const Planets = ({ planets }) => (
  <div className="row">
    {planets.map(plan => (
      <div className="col-sm-12 col-md-6 col-lg-3 mb-3 d-flex justify-content-between">
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">{plan.name}</h5>
            <Link className="card-link" to={'/planets/' + getPlanetsId(plan)}>
              Read more
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
)

export default Planets