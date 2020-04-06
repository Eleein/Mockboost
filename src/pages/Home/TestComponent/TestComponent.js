import React from 'react';

const tonightsDinner = ["Pizza", "cookies", "dinner", "apples", "beef", "pasties", "salsa roja"];



export function TestComponent(){
    return (<div>
        <ol>
            {tonightsDinner
                .filter(food =>food.includes("a"))
                .map((afood,index) => <li key={index} >{afood}</li>)
            }
        </ol>

    </div>)
}