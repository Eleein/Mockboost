import React from "react";
import "./FinReachSection.scss";
import { ContentItem } from "./ContentItem/ContentItem";

export function FinReachSection({
  section: { className, imgSrc, header, headerParagraph, content }
}) {
  return (
    <div className={`${className} flexed-items`}>
      <img src={imgSrc} alt="cellphone image" className="cellphone" />
      <div className="flexed-content">
        <div className="header-content-container">
          <h1 className="header">{header}</h1>
          {/*Here goes the variable for the header*/}
          <div className="header-paragraph-container">
            <p className="header-content">{headerParagraph}</p>
          </div>
        </div>

        {content.map((contentItem, index) => {
          return <ContentItem item={contentItem} key={index} />;
        })}


      </div>
    </div>
  );
}
