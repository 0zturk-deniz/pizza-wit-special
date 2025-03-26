import React, {useState} from "react";

function Counter() {
    const [count, setCount] = useState(1);

    const increase = () => {
        
        setCount(count + 1);
    }

    const decrease = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <button type="button" onClick={decrease}>-</button>
            <span>{count}</span>
            <button type="button" onClick={increase}>+</button>
        </div>
    );
}

export default Counter;