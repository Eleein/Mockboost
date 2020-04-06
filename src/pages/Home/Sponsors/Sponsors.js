import React from 'react';
import './Sponsors.scss';
import {SponsorsImage} from "./SponsorsImage/SponsorsImage";

const sponsorsDeals = [
   {
        sponsorName: "flixbus",
        offer: "+ 55",
        example: "12-17euros",
        imageSrc: "img/flixbus.png",
        showLabel: false
    }, {
        sponsorName:"Rewe",
        offer:"+ 43",
        example:"9-13euros",
        imageSrc:"img/rewe.png",
        showLabel: false
    }, {
        sponsorName:"Douglas",
        offer: "+ 20%",
        example:"10 - 7 E",
        imageSrc:"img/douglas.png",
        showLabel:true
    }, {
        sponsorName:"Zalando",
        offer: "+ 10%",
        example:"this is an example",
        imageSrc:"img/zalando.png",
        showLabel: true
    }
];

export function Sponsors (){
    return (<div className="ad">

        {sponsorsDeals.map((deal,index) => {
            return <SponsorsImage
                key={index}
                sponsorName={deal.sponsorName}
                offer={deal.offer}
                example={deal.example}
                imageSrc={deal.imageSrc}
                showLabel={deal.showLabel}
            />
        })}

    </div>)
}