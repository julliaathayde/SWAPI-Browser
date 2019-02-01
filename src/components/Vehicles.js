import React from 'react'
import { Link } from 'react-router-dom'

function getVehiclesId(vehi) {
  const parts = vehi.url.split('/').filter(Boolean)
  return parts[parts.length - 1]
}

const Vehicles = ({vehicles}) => {
  return(
    <div className="row">
      {vehicles.map(vehi => (
        <div className="col-sm-12 col-md-6 col-lg-3 mb-3 d-flex justify-content-between">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">{vehi.name}</h5>
              <Link className="card-link" to={'/vehicles/' + getVehiclesId(vehi)}>
                Read more
            </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Vehicles