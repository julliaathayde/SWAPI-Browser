import React from 'react'
import {Link} from 'react-router-dom'

function getCharacterId(char){
  const parts = char.url.split('/').filter(Boolean)
  return parts[parts.length - 1]
}

const People = ({people}) => (
  <div className="row">
    {people.map(char => (
      <div className="col-sm-12 col-md-6 col-lg-3 mb-3 d-flex justify-content-between">
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">{char.name}</h5>
            <Link className="card-link" to={'/people/' + getCharacterId(char)}>
              Read more
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
)
export default People