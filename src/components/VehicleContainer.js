import React, {Component} from 'react'
import Vehicle from './Vehicle'
import Loading from './Loading'

class VehicleContainer extends Component {
  componentWillMount() {
    this.setState({vehicle: []})

    fetch(`https://swapi.co/api/vehicles/${this.props.match.params.id}/?format=json`)
      .then(payload => payload.json())
      .then(json => this.setState({vehicle: json}))
  }

  render() {
    const { vehicle } = this.state
    if (vehicle.length === 0) {
      return <Loading />
    }
    return (
      <Vehicle vehicle={vehicle} />
    )
  }
}

export default VehicleContainer