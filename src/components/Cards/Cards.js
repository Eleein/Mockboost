import React from "react";
import "./Cards.scss";
import { OneCard } from "./OneCard/OneCard";
import FirstImage from "./elijah-o-donnell-7DVmV22nieQ-unsplash.jpg";
import SecondImage from "./jason-leung-50V3nZBvxxA-unsplash.jpg";
import ThirdImage from "./keagan-henman-9PjefVw5EII-unsplash.jpg";
import FourthImage from "./stoica-ionela-CoNsEK5iHug-unsplash.jpg";

const cardsData = [
  {
    cardImage: FirstImage,
    cardHeader: "this is us",
    cardLink: "this-is-us",
    cardText: "vcvmxvndkjfdjfgnjfggn"
  },
  {
    cardImage: SecondImage,
    cardHeader: "Grey's Anatomy",
    cardLink: "grey-anatomy",
    cardText: "cnvdnmvbnbcvfg"
  },
  {
    cardImage: ThirdImage,
    cardHeader: "House of Cards",
    cardLink: "house-of-cards",
    cardText: "cadsmmsmsdd"
  },
  {
    cardImage: FourthImage,
    cardHeader: "The Walking Dead",
    cardLink: "walking-dead",
    cardText: "sfhffnfngbkk"
  }
];
export function Cards() {
  return <>{
      cardsData.map( card => {
          return <OneCard card={card}/>
      })
  }</>;
}
