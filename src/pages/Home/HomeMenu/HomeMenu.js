import React from 'react';
import "./HomeMenu.scss";

export function HomeMenu() {
    return (<div className="menu-section">
        <nav>
            <ul className="menu">
                <li className="menu-item">
                    <button className="mission-and-contact">Mission</button>
                </li>
                <li className="menu-item">
                    <button className="mission-and-contact">Kontakt</button>
                </li>
                <li className="menu-item">
                    <button className="registration-and-login">Registrieren</button>
                </li>
                <li className="menu-item">
                    <button className="registration-and-login">Anmelden</button>
                </li>
            </ul>
        </nav>
    </div>)
}
