import React, { useState } from "react";

function CounterExample(props) {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1> {count} </h1>
            <h1 onClick={() => setCount(count + 1)}> Up </h1>
            <h1 onClick={() => setCount(count - 1)}> Down </h1>
            <h1>Hello, {props.name}!</h1>
        </div>
    );
}

export default CounterExample;