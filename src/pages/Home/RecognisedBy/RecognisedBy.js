import React from 'react';
import './RecognisedBy.scss';

const recognisedByImages = ["img/bekkant-aus.png", "img/der-tagesspiegel.png", "img/Handelsblatt.png", "img/wirtschafts-woche.png" ]

export function RecognisedBy() {
    return (<div className="bekannt-aus-section">
        <p className="bekannt-aus-subtitle">BEKANNT AUS</p>
        <div className="bekannt-aus-images">
            {recognisedByImages.map((imageSrc, index) =>{
                return <img className="entities" src={imageSrc}  key={index} />
            })}

        </div>

    </div>)
}