import React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = () => {
  return (
    <div className="row" id="mainMenu">
      <div className="col">
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
  );
}

export default MainMenu;