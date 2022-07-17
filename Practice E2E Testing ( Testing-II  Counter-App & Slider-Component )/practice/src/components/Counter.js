import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    var inp = [1,2,3]
    return (
        <div>
            <h3 data-testid="count-value">Count: {count}</h3>
            <input data-testid="inputbox" placeholder='Sample textbox for testing' arsh={inp} />
            <button data-testid="decrement" onClick={() => setCount(count - 1)}>REDUCE</button>
            <button data-testid="increment" onClick={() => setCount(count + 1)}>ADD</button>
        </div>
    )
}

export default Counter