import React, { useState, useEffect } from "react";
import "./cards-page.scss";

import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";

import Page from "../../components/page/page";
import { CardData } from "../../types/card";
import ItemList from "../../components/item-list/item-list";
import CardItem from "../../components/card-item/card-item";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/pro-solid-svg-icons";

import cardsDummyData from "../../dummy-data/cards.json";

const CardsPage: React.SFC<{}> = () => {
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    const dummyCards = cardsDummyData.cards;
    setCards(dummyCards);
  }, []);

  return (
    <Router>
      <Page title="Cards">
        <div className="cards-page-content">
          <div className="title-action-bar">
            <h3>List of cards</h3>
            <div className="actions">
              <button className="btn">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
          <div className="list">
            <ItemList>
              {cards.map((card) => (
                <CardItem name={card.name} />
              ))}
            </ItemList>
          </div>
        </div>
      </Page>
    </Router>
  );
};

export default CardsPage;
