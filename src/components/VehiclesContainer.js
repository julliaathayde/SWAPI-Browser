import React, { Component } from "react";
import Vehicles from './Vehicles'
import Loading from './Loading'

class VehiclesContainer extends Component {
  componentWillMount(){
    this.setState({vehicles: []})

    fetch('https://swapi.co/api/vehicles/?format=json')
      .then(payload => payload.json())
      .then(json => this.setState({vehicles: json.results}))
  }
  render() {
    const { vehicles } = this.state
    if (vehicles.length === 0) {
      return <Loading />
    }
    return (
      <Vehicles vehicles={vehicles} />
    )
  }
}

export default VehiclesContainer