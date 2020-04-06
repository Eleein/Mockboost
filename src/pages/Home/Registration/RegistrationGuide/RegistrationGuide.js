import React from "react";
import "./RegistrationGuide.scss";

export function RegistrationGuide({ imgSrc, number, subtitle, text, id }) {
  return (
    <div className="registration-guide">
      <img className="registration-images" src={imgSrc} /> <br />
      <strong>
        <span className="numbers">
          {number}
          <span className="text-in-bold">{subtitle}</span>
        </span>
      </strong>
      <p className="registration-instructions">{text}</p>
    </div>
  );
}
