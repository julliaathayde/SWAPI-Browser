import React, {Component} from 'react'
import Planet from './Planet'
import Loading from './Loading'

class PlanetContainer extends Component {
  componentWillMount(){
    this.setState({planet: []})

    fetch(`https://swapi.co/api/planets/${this.props.match.params.id}?format=json`)
      .then(payload => payload.json())
      .then(json => this.setState({planet: json}))
  }
  render() {
    const { planet } = this.state
    if (planet.length === 0) {
      return <Loading />
    } else {
      return <Planet planet={planet} />
    }
 
  }
}


export default PlanetContainer