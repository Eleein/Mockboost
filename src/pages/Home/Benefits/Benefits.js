import React from 'react';
import './Benefits.scss';

export function Benefits (){
    return (<div className="benefits">
        <img className="other-laptop" src="img/computer-image.png"/>
        <div className="benefits-small-container">
            <span className="yellow-letters">SO PROFITIERST DU</span>
            <h3 className="smaller-headers aligned-left">
                Ausgaben optimieren  leicht gemacht.
            </h3>
            <p className="benefits-description">Du erhältst kurz nach deiner Registrierung und der<br/> Verknüpfung
                deines Bankkontos die ersten,<br/>personalisierten Tipps per E-Mail.</p>
            <button className="registration-now">Jetzt registrieren</button>
        </div>

    </div>)
}