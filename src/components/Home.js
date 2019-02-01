import React from 'react'

const Home = () => {
  return (
    <div className="jumbotron">
        <h1 className="display-4">Olá Mundo!</h1>
        <p className="lead mt-5"> 
          Esta é uma aplicação feita em React que apresenta alguns dos personagens, planetas e veículos encontrados na franquia <a className="jumbotron-link" href="https://pt.wikipedia.org/wiki/Star_Wars">
            Star Wars
          </a>.
          
          Essa página foi inspirada no serviço fornecido pelo <a className="jumbotron-link"
          href="https://swapi.co/">
            SWAPI - The Star Wars API
          </a>
        </p>
    </div>
  )
}

export default Home