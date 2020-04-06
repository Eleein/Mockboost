import React, {useState} from "React";

export function Simple() {
    const [count, setCount] = useState(false);



    function updateCount(event) {
        setCount(count + 1);
    }

    function addTwo(a,b) {
        return a + b
    }

    addTwo(1,2)

    return (<div>
        <div>
            {count}
        </div>
        <div>
            {/* updateCount(event);
                setCount(event) */}
            <button onClick={setCount(event)}>+</button>
        </div>
    </div>)
}