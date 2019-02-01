import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className="row">
      <div className="col">
        <div className="brand">
          <h1>
            <Link to="/">SWAPI Browser</Link>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Header