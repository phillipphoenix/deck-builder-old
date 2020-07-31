import React from "react";
import "./card-item.scss";

export interface cardItemProps {
  name: string;
}

const CardItem: React.SFC<cardItemProps> = ({ name: title }) => {
  return (
    <div className="card-item">
      <span className="card-item__name">{title}</span>
    </div>
  );
};

export default CardItem;
