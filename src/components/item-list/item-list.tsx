import React from "react";
import "./item-list.scss";

export interface itemListProps {
  columns?: number;
}

const ItemList: React.SFC<itemListProps> = ({ children, columns }) => {
  return <div className={`item-list item-list__columns-${columns}`}>{children}</div>;
};

ItemList.defaultProps = {
  columns: 2,
};

export default ItemList;
