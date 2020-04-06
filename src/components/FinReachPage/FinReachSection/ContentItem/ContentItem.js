import React from "react";
import "./ContentItem.scss";

export function ContentItem({ item: { smallHeader, paragraph } }) {
  return (
    <div className="small-header-content-container">
      <h2 className="small-header">{smallHeader} </h2>
      {/*Here goes the variable for the header, maybe different class names*/}
      <div className="small-header-paragraph-container">
        <p className="small-header-content">{paragraph}</p>
      </div>
    </div>
  );
}
