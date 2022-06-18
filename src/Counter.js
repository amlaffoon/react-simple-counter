import { useState } from "react";

function Counter(props) {
    let [count, setCount] = useState(0);
    return <div>
        <h1>{props.name} Counter</h1>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
        <h1>{count}</h1>
    </div>
}

export default Counter;