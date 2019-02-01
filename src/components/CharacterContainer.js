import React, {Component} from 'react'
import Character from './Character';
import Loading from './Loading'

class CharacterContainer extends Component {
  componentWillMount() {
    this.setState({character: []})

    fetch(`https://swapi.co/api/people/${this.props.match.params.id}/?format=json`)
      .then(payload => payload.json())
      .then(json => this.setState({character: json}))
  }
  render() {
    const { character } = this.state
    if(character.length === 0) {
      return <Loading />
    }
    return (
      <Character character={this.state.character} />
    )
  }
}

export default CharacterContainer