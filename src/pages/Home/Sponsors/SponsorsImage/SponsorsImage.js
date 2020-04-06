import React from 'react';
import './SponsorsImage.scss';

export function SponsorsImage ({imageSrc, sponsorName, offer, example, showLabel}){
    return (
        <div>
            <img src={imageSrc} className="ad-pics second-row"/>
            {showLabel &&
                <h2 className="brands">{sponsorName}
                <span className="font-and-weight"> {offer} </span>Geldboost
                <br/><span className="fine-font">ZUM BEISPIEL</span><br/>
                <span className="font-and-weight">{example}</span></h2>
            }
        </div>
    )
}