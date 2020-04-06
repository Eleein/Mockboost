import React from 'react';
import './SecurityStandards.scss';



export function SecurityStandards ({imgSrc, StandardSubtitle, StandardText}){
    return (
        <div className="security-standards">

                <img className="standards-image" src={imgSrc}/>
                <span className="standard-subtitle"><strong>{StandardSubtitle}</strong></span>
                <p className="standard-text">
                    {StandardText}</p>
        </div>
    )
}