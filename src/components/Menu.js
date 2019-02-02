import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className="row">
      <div className="col">
        <nav className="container">
          <div className="row">
            <div className="col-12">
              <nav className="text-center">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <Link className="item-menu" to="/people">People</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link className="item-menu" to="/planets">Planets</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link className="item-menu" to="/vehicles">Vehicles</Link>
                  </li>
                </ul>
              </nav>
              
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Menu