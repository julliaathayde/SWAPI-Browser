import React from 'react'
import BackButton from './BackButton';

const Planet = ({ planet }) => (
  <div className="planet d-flex justify-content-center col-sm-12 col-md-6 col-lg-4 mx-auto">
    <div className="card card-info">
      <div className="card-body">
        <BackButton path={'planets'} />
        <h2 className="text-center">{planet.name}</h2>
        <dl>
          <dt>climate</dt>
          <dd>{planet.climate}</dd>
          <dt>population</dt>
          <dd>{planet.population}</dd>
          <dt>terrain</dt>
          <dd>{planet.terrain}</dd>
          <dt>gravity</dt>
          <dd>{planet.gravity}</dd>
        </dl>
      </div>
    </div>
  </div>
)

export default Planet