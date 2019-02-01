import React from 'react'
import BackButton from './BackButton'

const Vehicle = ({vehicle}) => {
  return (
    <div className="character d-flex justify-content-center col-sm-12 col-md-6 col-lg-4 mx-auto">
      <div className="card card-info">
        <div className="card-body">
          <BackButton path={'vehicles'}/>
          <h2 className="text-center">{vehicle.name}</h2>
          <dl>
            <dt>model:</dt>
            <dd>{vehicle.model}</dd>
            <dt>passengers:</dt>
            <dd>{vehicle.passengers}</dd>
            <dt>cost in credits:</dt>
            <dd>{vehicle.cost_in_credits}</dd>
            <dt>max_atmosphering_speed:</dt>
            <dd>{vehicle.max_atmosphering_speed}</dd>
          </dl>
        </div>
      </div>
    </div> 
  )
}

export default Vehicle