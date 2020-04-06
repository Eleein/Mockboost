import React from "react";

import { RegistrationGuide } from "./RegistrationGuide/RegistrationGuide";

const registrationList = [
  {
    id: "uno",
    imgSrc: "img/icon-free-registration.original.svg",
    number: "1.",
    subtitle: "Kostenlos Registrieren",
    text:
      "Du registrierst dich mit deiner E-Mail Adresse und bist ab sofort GeldBoost Mitglied."
  },
  {
    id: "dos",
    imgSrc: "/img/icon-bank-connect.original.svg",
    number: "2.",
    subtitle: "Bank Verbinden",
    text: `Du verbindest einmalig dein Bankkonto
        sicher mit unserer Plattform,damit unsere
        Technologie deine Ausgaben analysieren kann.`
  },
  {
    id: "tres",
    imgSrc: "/img/icon-receive-tips.original.svg",
    number: "3.",
    subtitle: "Spartipps erhalten",
    text: `Basierend auf deinen Ausgaben erhältst du
        kurz nach deiner Registrierung den ersten
        personalisierten Sparbericht
        und bekommst regelmäßige Spartipps.`
  }
];

export function Registration() {
  return (
    <>
      {registrationList.map(listItem => {
        return (
          <RegistrationGuide
            key={listItem.id}
            imgSrc={listItem.imgSrc}
            number={listItem.number}
            subtitle={listItem.subtitle}
            text={listItem.text}
          />
        );
      })}
    </>
  );
}
