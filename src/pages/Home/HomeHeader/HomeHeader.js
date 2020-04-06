import React from 'react';
import {HomeMenu} from "../HomeMenu/HomeMenu";
import './HomeHeader.scss';
export function HomeHeader () {
    return (
        <div className="header"> {/*FLEXED*/}

            <div className="logo">
                <img className="logo-img" alt="rocket logo" src="img/geldboost-logo-wht.original.svg"/>
            </div>

            <HomeMenu/> {/*COMPONENT NESTED IN HOMEHEADER */}

        </div>
    )
}