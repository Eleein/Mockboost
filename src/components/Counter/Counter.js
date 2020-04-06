import React, {useState} from 'react';
import './Counter.scss';

export function Counter () {
    const [count, setCount] = useState(0);

    function sumCount () {
        setCount(count + 1)
    }
    function decreaseCount () {
        setCount(count - 1)
    }
    function refreshCount (){
        setCount(0)
    }

    return (<div className="counter-layout">
        <span>{count}</span>
        <button onClick={sumCount}>+</button>
        <button onClick={decreaseCount}>-</button>
        <button onClick={refreshCount}>refresh</button>

    </div>)
}
