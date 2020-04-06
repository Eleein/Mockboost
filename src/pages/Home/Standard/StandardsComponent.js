import React from 'react';
import {SecurityStandards} from "./SecurityStandards/SecurityStandards";

const StandardsList =[{
    imgSrc: "/img/64fb5433-icon-database-lock.svg",
    StandardSubtitle: "256-bit TLS Verschlüsselung",
    StandardText: "Wir nutzen den höchsten und sichersten Grad an Verschlüsselung. Somit sind deine Daten jederzeit geschützt."
},
    {
        imgSrc:"img/icon-datenschutz.original.svg",
        StandardSubtitle:"Datenschutz-zertifiziert",
        StandardText:"Konform mit den neuen EU-Richtlinien. Wir speichern nur die notwendigsten Daten und teilen sie nicht mit anderen."
    },
    {
        imgSrc:"/img/c7351650-icon-read-glasses.svg",
        StandardSubtitle:"Ausschließlich Lesezugriff",
        StandardText:"Wenn du dein Girokonto mit uns verbindest, erhalten wir ausschließlich Lesezugriff. Niemand kann an dein Geld ran."
    }

];

export function StandardsComponent () {
    return ( <>
        {
            StandardsList.map((StandardsListItem,index) =>{
                   return <SecurityStandards
                       key={index}
                       imgSrc={StandardsListItem.imgSrc}
                       StandardSubtitle={StandardsListItem.StandardSubtitle}
                        StandardText={StandardsListItem.StandardText}/>
        })
        }
        </>

    )
}