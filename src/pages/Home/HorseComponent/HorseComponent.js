import React, { useState } from "react";
import "./HorseComponent.scss";
import horseImage from "./horse.jpg";

export function HorseComponent() {
  const [isHorseImgAvailable, setIsHorseImgAvailable] = useState(true);
  function setIsHorseImgStatus(event) {
    if (isHorseImgAvailable) {
      setIsHorseImgAvailable(false);
    } else {
      setIsHorseImgAvailable(true);
    }
  }

  return (
    <>
      {isHorseImgAvailable && (
        <img className="horse" src={horseImage} alt="white horse" />
      )}
      <button className="registration-now" onClick={setIsHorseImgStatus}>
        Hide our friend
      </button>
    </>
  );
}
