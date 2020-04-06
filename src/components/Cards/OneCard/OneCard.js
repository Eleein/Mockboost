import React from "react";
import "./OneCard.scss";

export function OneCard({card: {cardImage, cardHeader, cardLink, cardText }}) {

  return (
    <div className="card-container">
      <div className="image-container">
        <img className="card-image" src={cardImage}/>
      </div>

      <div className="card-content">
          <div className="header-link-container">
        <h1 className="card-header">{cardHeader}</h1>
        <a className="card-link" href="https://css-tricks.com/almanac/properties/p/position/">{cardLink}</a>
          </div>
          <p className="card-paragraph"> {cardText}</p>
      </div>

    </div>
  );
}
