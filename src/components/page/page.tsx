import React from "react";
import "./page.scss";

export interface pageProps {
  title: string;
}

const Page: React.SFC<pageProps> = ({ children, title }) => {
  return (
    <div className="page">
      <h2 className="page__title">{title}</h2>
      <div className="page__content">{children}</div>
    </div>
  );
};

export default Page;
