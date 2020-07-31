import React from "react";
import "./card-item.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faText } from "@fortawesome/pro-solid-svg-icons";
import { CardData } from "../../types/card";

export interface cardItemProps {
  cardData: CardData;
}

const CardItem: React.SFC<cardItemProps> = ({ cardData }) => {
  return (
    <div className="card-item">
      <span className="card-item__name">{cardData.name}</span>
      {cardData.description && (
        <span className="card-item__description-icon">
          <FontAwesomeIcon icon={faText} />
        </span>
      )}
    </div>
  );
};

export default CardItem;
