import React, { useState, useEffect } from "react";
import "./cards-page.scss";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
  useParams,
  useRouteMatch,
  Link,
} from "react-router-dom";

import Page from "../../components/page/page";
import { CardData } from "../../types/card";
import ItemList from "../../components/item-list/item-list";
import CardItem from "../../components/card-item/card-item";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/pro-solid-svg-icons";

import EditCard from "../../components/edit-card/edit-card";
import { useAllCardsData } from "../../data-hooks/cards-hooks";

const CardsPage: React.SFC<{}> = () => {
  let { path, url } = useRouteMatch();

  const [cards, setCards] = useState<CardData[]>([]);

  const fetchAllCards = useAllCardsData();

  useEffect(() => {
    fetchAllCards().then((fetchedCards) => {
      setCards(fetchedCards);
    });
  }, []);

  const CardsList = () => (
    <>
      <div className="title-action-bar">
        <h3>List of cards</h3>
        <div className="actions">
          <Link className="btn" to={`${url}/create`}>
            <FontAwesomeIcon icon={faPlus} />
          </Link>
        </div>
      </div>
      <div className="list">
        <ItemList>
          {cards.map((card) => (
            <Link key={card.id} to={`${url}/card/${card.id}/edit`}>
              <CardItem cardData={card} />
            </Link>
          ))}
        </ItemList>
      </div>
    </>
  );

  return (
    <Router>
      <Page title="Cards">
        <div className="cards-page-content">
          <Switch>
            <Route exact path={path}>
              <CardsList />
            </Route>
            <Route
              path={`${path}/card/:cardId/edit`}
              render={(routeProps) => <EditCard cardId={routeProps.match.params["cardId"]} />}
            />
            <Route path={`${path}/create`} render={(routeProps) => <EditCard />} />
          </Switch>
        </div>
      </Page>
    </Router>
  );
};

export default CardsPage;
