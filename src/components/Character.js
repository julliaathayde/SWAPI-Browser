import React, {Fragment} from 'react';

import BackButton from './BackButton';

const Character = ({character}) => (
  <Fragment>
    <div className="col backbutton">
      
    </div>
    <div className="character d-flex justify-content-center col-sm-12 col-md-6 col-lg-4 mx-auto">
      <div className="card card-info">
        <div className="card-body">
          <BackButton path={'people'} />
          <h2 className="text-center">{character.name}</h2>
          <dl>
            <dt>height:</dt>
            <dd>{character.height}</dd>
            <dt>eye color:</dt>
            <dd>{character.eye_color}</dd>
            <dt>birth year:</dt>
            <dd>{character.birth_year}</dd>
            <dt>gender:</dt>
            <dd>{character.gender}</dd>
          </dl>
        </div>
      </div>
    </div>
  </Fragment>
)

export default Character