import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import MenuXs from "./components/MenuXs";
import MainMenu from "./components/MainMenu";
import Home from "./components/Home";
import CharacterContainer from "./components/CharacterContainer";
import PeopleContainer from "./components/PeopleContainer";
import PlanetsContainer from "./components/PlanetsContainer";
import PlanetContainer from "./components/PlanetContainer";
import VehiclesContainer from "./components/VehiclesContainer";
import VehicleContainer from "./components/VehicleContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container mt-5">
            <Header />
            <MainMenu />
            <MenuXs />
            <hr />
            <Switch>
              <Route exact path="/" component={Home} />

              <Route exact path="/people" component={PeopleContainer} />
              <Route exact path="/people/:id" component={CharacterContainer} />

              <Route exact path="/planets" component={PlanetsContainer} />
              <Route exact path="/planets/:id" component={PlanetContainer} />

              <Route exact path="/vehicles" component={VehiclesContainer} />
              <Route exact path="/vehicles/:id/" component={VehicleContainer} />
            </Switch>
            <footer className="footer">
              <hr />
              <p className="text-center">
                <small>
                  2019 Jullia Chaves. Made with <i className="fas fa-heart" />{" "}
                  in Fortaleza, Brazil
                </small>
              </p>
            </footer>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
