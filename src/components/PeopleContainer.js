import React, {Component} from 'react'
import People from './People';
import Loading from './Loading'

class PeopleContainer extends Component {
  componentWillMount() {
    this.setState({people: []})

    fetch('https://swapi.co/api/people/?format=json')
      .then(payload => payload.json())
      .then(json => this.setState({ people: json.results }))
  }
  render() {
    const { people } = this.state
    if (people.length === 0) {
      return <Loading />
    }
    return <People people={people} />
  }
}

export default PeopleContainer