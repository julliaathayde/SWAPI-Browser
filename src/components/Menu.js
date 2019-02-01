import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className="row">
      <div className="col">
        <nav className="d-flex justify-content-center">
          <div className="row">
            <div className="col-sm-4">
              <Link className="item-menu" to="/people">People</Link>
            </div>
            <div className="col-sm-4">
              <Link className="item-menu" to="/planets">Planets</Link>
            </div>
            <div className="col-sm-4">
              <Link className="item-menu" to="/vehicles">Vehicles</Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Menu