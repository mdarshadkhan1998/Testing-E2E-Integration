import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1  data-testid="count-value">{count}</h1>
            <button data-testid="plus-button" onClick={() => setCount(count - 1)}>-</button>
            <button data-testid="minus-button" onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export default Counter