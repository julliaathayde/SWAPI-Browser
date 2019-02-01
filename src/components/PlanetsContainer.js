import React, { Component } from 'react'
import Planets from './Planets'
import Loading from './Loading'

class PlanetsContainer extends Component {
  componentWillMount() {
    this.setState({ planets: []})

    fetch('https://swapi.co/api/planets/?format=json')
      .then(payload => payload.json())
      .then(json => this.setState({planets: json.results}))

    console.log(this.state)
  }
  render(){
    const { planets } = this.state
    if(planets.length === 0) {
      return <Loading />
    }
    return <Planets planets={planets} />
  }
}

export default PlanetsContainer