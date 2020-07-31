import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpade, faLayerGroup, faPlay } from "@fortawesome/pro-solid-svg-icons";
import CardsPage from "./pages/cards/cards-page";

const App: React.SFC<{}> = () => {
  return (
    <Router>
      <div className="app">
        <header className="app__header">
          <h1>Deck Builder</h1>
        </header>
        <div className="app__content">
          <Switch>
            <Route path="/cards">
              <CardsPage />
            </Route>
            <Route path="/decks">
              <h2>Decks</h2>
            </Route>
            <Route path="/play">
              <h2>Play</h2>
            </Route>
            <Route path="/">
              <Redirect to="/cards" />
            </Route>
          </Switch>
        </div>
        <nav className="app__navigation">
          <NavLink activeClassName="active-nav" to="/cards">
            <span className="btn">
              <FontAwesomeIcon icon={faSpade} />
            </span>
          </NavLink>
          <NavLink activeClassName="active-nav" to="/decks">
            <span className="btn">
              <FontAwesomeIcon icon={faLayerGroup} />
            </span>
          </NavLink>
          <NavLink activeClassName="active-nav" to="/play">
            <span className="btn">
              <FontAwesomeIcon icon={faPlay} />
            </span>
          </NavLink>
        </nav>
      </div>
    </Router>
  );
};

export default App;
